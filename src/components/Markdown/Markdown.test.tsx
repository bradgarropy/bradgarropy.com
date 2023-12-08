import {render, screen} from "@testing-library/react"
import {expect, test} from "vitest"

import Markdown from "~/components/Markdown"

test("renders", () => {
    render(<Markdown content={<p>Markdown</p>} />)
    expect(screen.getByText("Markdown").parentElement).toHaveClass("prose")
})
