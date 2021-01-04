import {render, screen} from "test-utils/render"

import PostList from "./PostList"

const mockPosts = [
    {
        html: "<p>testing</p>",
        frontmatter: {
            slug: "my-first-post",
            title: "🧪 My First Post",
            date: "December 25, 2020",
            topic: {
                icon: "😎",
                name: "life",
            },
        },
    },
    {
        html: "<p>testing</p>",
        frontmatter: {
            slug: "my-second-post",
            title: "🧪 My Second Post",
            date: "January 1, 2021",
            topic: {
                icon: "😎",
                name: "life",
            },
        },
    },
]

test("shows posts", () => {
    render(<PostList posts={mockPosts} />)

    mockPosts.forEach(mockPost => {
        expect(screen.getByText(mockPost.frontmatter.title))
    })
})

test("shows no posts", () => {
    render(<PostList posts={[]} />)
    expect(screen.getByText("no posts found"))
})
