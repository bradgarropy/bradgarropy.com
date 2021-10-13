import {render, screen} from "@testing-library/react"
import {mockNow} from "test-utils/mocks/data"

import Now from "./Now"

test("shows now", () => {
    render(<Now now={mockNow} />)

    expect(screen.getByText("🧭 now"))
    expect(screen.getByText("December 31, 2020"))
    expect(screen.getByText("testing"))
    expect(screen.getByText("derek sivers"))
    expect(screen.getByText("nownownow"))
})

test("navigates nows", () => {
    render(<Now now={mockNow} newer={mockNow.previous} older={mockNow.next} />)

    expect(screen.getByText("👈🏼 newer")).not.toHaveClass("disabled")
    expect(screen.getByText("👈🏼 newer")).toHaveAttribute(
        "href",
        `/now/${mockNow.previous}`,
    )

    expect(screen.getByText("older 👉🏼")).not.toHaveClass("disabled")
    expect(screen.getByText("older 👉🏼")).toHaveAttribute(
        "href",
        `/now/${mockNow.next}`,
    )
})

test("disables nows", () => {
    render(<Now now={mockNow} newer="" older="" />)

    expect(screen.getByText("👈🏼 newer")).toHaveClass("disabled")
    expect(screen.getByText("older 👉🏼")).toHaveClass("disabled")
})
