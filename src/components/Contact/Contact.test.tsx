import {render, screen} from "@testing-library/react"
import {expect, test} from "vitest"

import Contact from "~/components/Contact"

test("shows contact page", () => {
    render(<Contact />)
    expect(screen.getByText("👋🏼 say hi")).toBeInTheDocument()
})
