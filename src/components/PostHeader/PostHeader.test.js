import PostHeader from "./PostHeader"
import {render, screen} from "test-utils/render"

const mockFrontmatter = {
    slug: "my-test-post",
    title: "🧪 My Test Post",
    date: "January 1, 2021",
    topic: {
        icon: "😎",
        name: "life",
    },
}

test("shows meta", () => {
    render(
        <PostHeader
            date={mockFrontmatter.date}
            topic={mockFrontmatter.topic}
            title={mockFrontmatter.title}
            slug={mockFrontmatter.slug}
        />,
    )

    expect(screen.getByText(mockFrontmatter.date, {exact: false}))
    expect(screen.getByText(`#${mockFrontmatter.topic.name}`))
    expect(screen.getByText(mockFrontmatter.title))
})

test("links to topic", () => {
    render(
        <PostHeader
            date={mockFrontmatter.date}
            topic={mockFrontmatter.topic}
            title={mockFrontmatter.title}
            slug={mockFrontmatter.slug}
        />,
    )

    expect(screen.getByText(`#${mockFrontmatter.topic.name}`)).toHaveAttribute(
        "href",
        `/topic/${mockFrontmatter.topic.name}`,
    )
})
