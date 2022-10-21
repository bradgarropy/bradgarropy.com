import {render, screen} from "@testing-library/react"
import PostList from "components/PostList"
import {mockPostsFrontmatter} from "test-utils/mocks"
import {expect, test} from "vitest"

test("shows posts", () => {
    render(<PostList posts={mockPostsFrontmatter} />)

    mockPostsFrontmatter.forEach(post => {
        expect(screen.getByText(post.title))
    })
})

test("shows no posts", () => {
    render(<PostList posts={[]} />)
    expect(screen.getByText("no posts found"))
})
