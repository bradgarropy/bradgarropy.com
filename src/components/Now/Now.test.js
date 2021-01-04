import {render, screen} from "test-utils/render"

import Now from "./Now"

const mockNow = {
    html: "<p>testing<p>",
    frontmatter: {date: "December 31, 2020"},
}

const mockNewer = "2021-01-01"
const mockOlder = "2020-12-25"

test("shows now", () => {
    render(<Now now={mockNow} />)

    expect(screen.getByText("🧭 now"))
    expect(screen.getByText("December 31, 2020"))
    expect(screen.getByText("testing"))
    expect(screen.getByText("derek sivers"))
    expect(screen.getByText("nownownow"))
})

test("navigates nows", () => {
    render(<Now now={mockNow} newer={mockNewer} older={mockOlder} />)

    expect(screen.getByText("👈🏼 newer")).not.toHaveClass("disabled")
    expect(screen.getByText("👈🏼 newer")).toHaveAttribute(
        "href",
        `/now/${mockNewer}`,
    )

    expect(screen.getByText("older 👉🏼")).not.toHaveClass("disabled")
    expect(screen.getByText("older 👉🏼")).toHaveAttribute(
        "href",
        `/now/${mockOlder}`,
    )
})

test("disables nows", () => {
    render(<Now now={mockNow} newer="" older="" />)

    expect(screen.getByText("👈🏼 newer")).toHaveClass("disabled")
    expect(screen.getByText("older 👉🏼")).toHaveClass("disabled")
})
