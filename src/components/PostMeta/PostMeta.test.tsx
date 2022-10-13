import {render, screen} from "@testing-library/react"
import PostMeta from "components/PostMeta"
import {mockPost} from "test-utils/mocks"
import {expect, test} from "vitest"

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
