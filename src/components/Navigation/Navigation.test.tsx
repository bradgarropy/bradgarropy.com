import {render, screen} from "@testing-library/react"
import {expect, test} from "vitest"

import Navigation from "~/components/Navigation"

const links = ["blog", "now", "uses", "hire me", "contact"]

test("shows links", () => {
    render(<Navigation />)

    links.forEach(link => {
        expect(screen.getByText(link)).toBeInTheDocument()
    })
})
