import {render, screen} from "test-utils/render"

import PostList from "./PostList"

const mockPosts = [
    {
        slug: "my-first-post",
        title: "🧪 My First Post",
        date: "2020-12-25",
        topic: {
            icon: "😎",
            name: "life",
        },
    },
    {
        slug: "my-second-post",
        title: "🧪 My Second Post",
        date: "2021-01-01",
        topic: {
            icon: "😎",
            name: "life",
        },
    },
]

test("shows posts", () => {
    render(<PostList posts={mockPosts} />)

    mockPosts.forEach(mockPost => {
        expect(screen.getByText(mockPost.title))
    })
})

test("shows no posts", () => {
    render(<PostList posts={[]} />)
    expect(screen.getByText("no posts found"))
})
