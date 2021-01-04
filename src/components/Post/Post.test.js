import {render, screen} from "test-utils/render"

import Post from "./Post"

const mockPost = {
    html: "<p>testing</p>",
    frontmatter: {
        slug: "my-test-post",
        title: "🧪 My Test Post",
        date: "2021-01-01",
        topic: {
            icon: "😎",
            name: "life",
        },
    },
}

test("shows post header", () => {
    render(<Post post={mockPost} />)

    expect(screen.getByText("January 1, 2021", {exact: false}))
    expect(screen.getByText(`#${mockPost.frontmatter.topic.name}`))
    expect(screen.getByText(mockPost.frontmatter.title))
})

test("shows post body", () => {
    render(<Post post={mockPost} />)
    expect(screen.getByText("testing"))
})

test("shows post footer", () => {
    render(<Post post={mockPost} />)
    expect(screen.getByText("💬 discuss on twitter"))
    expect(screen.getByText("💻 edit on github"))
})
