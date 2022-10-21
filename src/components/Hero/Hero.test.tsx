import {render, screen} from "@testing-library/react"
import Hero from "components/Hero"
import {expect, test} from "vitest"

test.concurrent("shows hero", () => {
    render(<Hero />)

    const heroImage = screen.getByAltText("bg")
    const heroLink = heroImage.parentElement

    expect(heroLink).toHaveAttribute(
        "href",
        "https://instagram.com/bradgarropy",
    )

    expect(screen.getByText("lead frontend developer"))
    expect(screen.getByText("growing content creator"))
    expect(screen.getByText("side project connoisseur"))
    expect(screen.getByText("open source maintainer"))
})
