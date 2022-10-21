import {render, screen} from "@testing-library/react"
import Navigation from "components/Navigation"
import {expect, test} from "vitest"

const links = ["blog", "now", "uses", "hire me", "contact"]

test.concurrent("shows links", () => {
    render(<Navigation />)

    links.forEach(link => expect(screen.getByText(link)))
})
