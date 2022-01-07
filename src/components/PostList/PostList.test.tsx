import {render, screen} from "@testing-library/react"
import {mockPostsFrontmatter} from "test-utils/mocks"

import PostList from "./PostList"

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
