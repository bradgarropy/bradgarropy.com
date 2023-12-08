import {render, screen} from "@testing-library/react"
import {expect, test} from "vitest"

import PostList from "~/components/PostList"
import {mockPostsFrontmatter} from "~/test-utils/mocks"

test("shows posts", () => {
    render(<PostList posts={mockPostsFrontmatter} />)

    mockPostsFrontmatter.forEach(post => {
        expect(screen.getByText(post.title)).toBeInTheDocument()
    })
})

test("shows no posts", () => {
    render(<PostList posts={[]} />)
    expect(screen.getByText("no posts found")).toBeInTheDocument()
})
