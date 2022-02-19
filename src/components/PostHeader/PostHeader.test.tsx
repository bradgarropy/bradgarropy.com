import {render, screen} from "@testing-library/react"
import {mockPost} from "test-utils/mocks"

import PostHeader from "./PostHeader"

test("shows meta", () => {
    render(
        <PostHeader
            date={mockPost.frontmatter.date}
            topic={mockPost.frontmatter.topic}
            title={mockPost.frontmatter.title}
            slug={mockPost.frontmatter.slug}
        />,
    )

    expect(screen.getByText("January 1, 2021", {exact: false}))
    expect(screen.getByText(`#${mockPost.frontmatter.topic}`))
    expect(screen.getByText(mockPost.frontmatter.title))
})

test("links to topic", () => {
    render(
        <PostHeader
            date={mockPost.frontmatter.date}
            topic={mockPost.frontmatter.topic}
            title={mockPost.frontmatter.title}
            slug={mockPost.frontmatter.slug}
        />,
    )

    expect(screen.getByText(`#${mockPost.frontmatter.topic}`)).toHaveAttribute(
        "href",
        `/topic/${mockPost.frontmatter.topic}`,
    )
})
