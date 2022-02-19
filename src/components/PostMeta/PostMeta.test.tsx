import {render, screen} from "@testing-library/react"
import {mockPost} from "test-utils/mocks"

import PostMeta from "./PostMeta"

test("shows meta", () => {
    render(
        <PostMeta
            date={mockPost.frontmatter.date}
            topic={mockPost.frontmatter.topic}
        />,
    )

    expect(screen.getByText("January 1, 2021", {exact: false}))
    expect(screen.getByText(`#${mockPost.frontmatter.topic}`))
})

test("links to topic", () => {
    render(
        <PostMeta
            date={mockPost.frontmatter.date}
            topic={mockPost.frontmatter.topic}
        />,
    )

    expect(screen.getByText(`#${mockPost.frontmatter.topic}`)).toHaveAttribute(
        "href",
        `/topic/${mockPost.frontmatter.topic}`,
    )
})
