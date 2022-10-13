import {render, screen} from "@testing-library/react"
import PostTitle from "components/PostTitle"
import {expect, test} from "vitest"

const mockTitle = "🧪 My Test Post"
const mockSlug = "my-test-post"

test("shows title", () => {
    render(<PostTitle title={mockTitle} />)

    expect(screen.getByText(mockTitle))
    expect(screen.getByText(mockTitle)).not.toHaveAttribute("href")
})

test("links to title", () => {
    render(<PostTitle title={mockTitle} slug={mockSlug} />)

    expect(screen.getByText(mockTitle))
    expect(screen.getByText(mockTitle)).toHaveAttribute(
        "href",
        `/blog/${mockSlug}`,
    )
})
