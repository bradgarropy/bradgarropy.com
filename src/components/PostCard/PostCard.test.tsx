import {render, screen} from "@testing-library/react"
import {expect, test} from "vitest"

import PostCard from "~/components/PostCard"
import {mockPostFrontmatter} from "~/test-utils/mocks"

test("shows post card", () => {
    render(<PostCard post={mockPostFrontmatter} />)

    expect(screen.getByText(mockPostFrontmatter.title)).toBeInTheDocument()

    expect(screen.getByText(`#${mockPostFrontmatter.topic}`)).toHaveAttribute(
        "href",
        `/topic/${mockPostFrontmatter.topic}`,
    )

    expect(screen.getByText(mockPostFrontmatter.tags[0])).toHaveAttribute(
        "href",
        `/tag/${mockPostFrontmatter.tags[0]}`,
    )
})
