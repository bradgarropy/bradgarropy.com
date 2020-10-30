import Post from "./Post"
import {useStaticQuery} from "gatsby"
import {render, screen} from "test-utils/render"

const mockPost = {
    html: "<p>testing</p>",
    frontmatter: {
        slug: "my-test-post",
        title: "🧪 My Test Post",
        date: "January 1, 2021",
        topic: {
            icon: "😎",
            name: "life",
        },
    },
}

const mockQuery = {
    site: {
        siteMetadata: {
            siteUrl: "https://bradgarropy.com",
        },
    },
}

useStaticQuery.mockReturnValue(mockQuery)

test("shows post header", () => {
    render(<Post post={mockPost} />)

    expect(screen.getByText(mockPost.frontmatter.date, {exact: false}))
    expect(screen.getByText(`#${mockPost.frontmatter.topic.name}`))
    expect(screen.getByText(mockPost.frontmatter.title))
})

test("shows post body", () => {
    render(<Post post={mockPost} />)
    expect(screen.getByText("testing"))
})

test("shows post footer", () => {
    render(<Post post={mockPost} />)
    expect(screen.getByText("discuss on twitter"))
    expect(screen.getByText("edit on github"))
})
