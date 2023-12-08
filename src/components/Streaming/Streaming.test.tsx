import {render, screen} from "@testing-library/react"
import {expect, test} from "vitest"

import Streaming from "~/components/Streaming"

test("shows streaming", () => {
    render(<Streaming />)
    expect(screen.getByText("🎥 streaming")).toBeInTheDocument()
})
