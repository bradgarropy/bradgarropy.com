import {render, screen} from "@testing-library/react"
import Resume from "components/Resume"
import {mockResume} from "test-utils/mocks"
import {expect, test} from "vitest"

test("shows resume page", () => {
    render(<Resume resume={mockResume} />)
    expect(screen.getByText("resume"))
})
