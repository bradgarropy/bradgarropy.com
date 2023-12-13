import {render, screen} from "@testing-library/react"
import {expect, test} from "vitest"

import FancyLink from "~/components/FancyLink"

test("renders", () => {
    render(<FancyLink to="/blog">blog</FancyLink>)
    expect(screen.getByText("blog")).toHaveClass("shadow-link")
})
