import type {LoaderFunctionArgs} from "@remix-run/node"
import {render, screen, within} from "@testing-library/react"
import {expect, test, vi} from "vitest"

import * as layout from "~/components/Layout"
import BlogRoute, {loader} from "~/routes/blog.$slug"
import {mockPost, mockPostsFrontmatter} from "~/test-utils/mocks"
import {mockUseLoaderData} from "~/test-utils/mocks/remix"
import * as posts from "~/utils/posts"

const getPostBySlugSpy = vi.spyOn(posts, "getPostBySlug")
const getRelatedPostsSpy = vi.spyOn(posts, "getRelatedPosts")
const layoutSpy = vi.spyOn(layout, "default")

layoutSpy.mockImplementation(({children}) => <>{children}</>)

const args: LoaderFunctionArgs = {
    context: {},
    params: {slug: mockPost.frontmatter.slug},
    request: new Request(
        `https://bradgarropy.com/blog/${mockPost.frontmatter.slug}`,
    ),
}

test("returns blog post", async () => {
    getPostBySlugSpy.mockResolvedValueOnce(mockPost)
    getRelatedPostsSpy.mockReturnValueOnce(mockPostsFrontmatter)

    const response = await loader(args)

    expect(response).toEqual({
        post: mockPost,
        relatedPosts: mockPostsFrontmatter,
    })
})

test("returns not found when post does not exist", async () => {
    getPostBySlugSpy.mockResolvedValueOnce(null)

    await expect(loader(args)).rejects.toMatchObject({status: 404})
    expect(getRelatedPostsSpy).not.toHaveBeenCalled()
})

test("shows blog post", () => {
    mockUseLoaderData.mockReturnValue({
        post: mockPost,
        relatedPosts: mockPostsFrontmatter,
    })

    render(<BlogRoute />)

    expect(document.title).toEqual(mockPost.frontmatter.title)

    const article = screen.getByRole("article")

    expect(
        within(article).getByText(mockPost.frontmatter.title),
    ).toBeInTheDocument()

    expect(screen.getByText("related posts")).toBeInTheDocument()
    expect(screen.getByText("newsletter")).toBeInTheDocument()
})
