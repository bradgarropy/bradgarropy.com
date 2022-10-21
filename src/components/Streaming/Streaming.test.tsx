import {render, screen} from "@testing-library/react"
import Streaming from "components/Streaming"
import {expect, test} from "vitest"

test.concurrent("shows streaming", () => {
    render(<Streaming />)
    expect(screen.getByText("🎥 streaming"))
})
