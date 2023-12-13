import {render, screen} from "@testing-library/react"
import {expect, test} from "vitest"

import Hero from "~/components/Hero"

test("shows hero", () => {
    render(<Hero />)

    const heroImage = screen.getByAltText("bg")
    const heroLink = heroImage.parentElement

    expect(heroLink).toHaveAttribute(
        "href",
        "https://instagram.com/bradgarropy",
    )

    expect(screen.getByText("lead frontend developer")).toBeInTheDocument()
    expect(screen.getByText("growing content creator")).toBeInTheDocument()
    expect(screen.getByText("side project connoisseur")).toBeInTheDocument()
    expect(screen.getByText("open source maintainer")).toBeInTheDocument()
})
