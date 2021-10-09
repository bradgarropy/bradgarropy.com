import {render, screen} from "@testing-library/react"
import Resume from "components/Resume"
import {useResume} from "hooks"
import {mockResume} from "test-utils/mocks"

jest.mock("hooks")
useResume.mockReturnValue(mockResume.html)

test("shows resume page", () => {
    render(<Resume />)
    expect(screen.getByText("resume"))
})
