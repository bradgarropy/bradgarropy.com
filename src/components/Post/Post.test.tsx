import {render, screen} from "@testing-library/react"

import Post from "~/components/Post"
import useMeta from "~/hooks/useMeta"
import {mockMeta, mockPost} from "~/test-utils/mocks"

jest.mock("hooks/useMeta")

const mockUseMeta = useMeta as jest.Mock
mockUseMeta.mockReturnValue(mockMeta)

test("shows post header", () => {
    render(<Post post={mockPost} />)

    expect(screen.getByText("January 1, 2021", {exact: false}))
    expect(screen.getByText(`#${mockPost.frontmatter.topic}`))
    expect(screen.getByText(mockPost.frontmatter.title))
    expect(screen.getByText(mockPost.frontmatter.tags[0]))
})

test("shows post body", () => {
    render(<Post post={mockPost} />)
    expect(screen.getByText("This is the first test post."))
})

test("shows post footer", () => {
    render(<Post post={mockPost} />)
    expect(screen.getByText("💬 discuss on twitter"))
    expect(screen.getByText("💻 edit on github"))
})
