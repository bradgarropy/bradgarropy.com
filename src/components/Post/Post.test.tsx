import {render, screen} from "@testing-library/react"
import type {Mock} from "vitest"
import {expect, test, vi} from "vitest"

import Post from "~/components/Post"
import useMeta from "~/hooks/useMeta"
import {mockMeta, mockPost} from "~/test-utils/mocks"

vi.mock("~/hooks/useMeta")

const mockUseMeta = useMeta as Mock
mockUseMeta.mockReturnValue(mockMeta)

test("shows post header", () => {
    render(<Post post={mockPost} />)

    expect(
        screen.getByText("January 1, 2021", {exact: false}),
    ).toBeInTheDocument()

    expect(
        screen.getByText(`#${mockPost.frontmatter.topic}`),
    ).toBeInTheDocument()

    expect(screen.getByText(mockPost.frontmatter.title)).toBeInTheDocument()
    expect(screen.getByText(mockPost.frontmatter.tags[0])).toBeInTheDocument()
})

test("shows post body", () => {
    render(<Post post={mockPost} />)
    expect(screen.getByText("This is the first test post.")).toBeInTheDocument()
})

test("shows post footer", () => {
    render(<Post post={mockPost} />)
    expect(screen.getByText("💬 discuss on twitter")).toBeInTheDocument()
    expect(screen.getByText("💻 edit on github")).toBeInTheDocument()
})
