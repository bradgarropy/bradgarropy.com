import {render, screen} from "@testing-library/react"
import {expect, test} from "vitest"

import Resume from "~/components/Resume"
import {mockResume} from "~/test-utils/mocks"

test("shows resume page", () => {
    render(<Resume resume={mockResume} />)
    expect(screen.getByText("resume")).toBeInTheDocument()
})
