import {render, screen} from "@testing-library/react"
import Streaming from "components/Streaming"
import {useApp} from "hooks"
import {generateAppCtx} from "test-utils/generators"

const mockAppCtx = generateAppCtx({live: true})

jest.mock("hooks")

test("shows streaming", () => {
    useApp.mockReturnValue(mockAppCtx)

    render(<Streaming />)
    expect(screen.getByText("🎥 streaming"))
})
