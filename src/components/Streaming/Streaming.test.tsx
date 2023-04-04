import {render, screen} from "@testing-library/react"

import Streaming from "~/components/Streaming"

test("shows streaming", () => {
    render(<Streaming />)
    expect(screen.getByText("🎥 streaming"))
})
