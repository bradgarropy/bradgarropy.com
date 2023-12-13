import {render, screen} from "@testing-library/react"
import {expect, test} from "vitest"

import Uses from "~/components/Uses"
import {mockUses} from "~/test-utils/mocks"

test("shows uses", () => {
    render(<Uses uses={mockUses} />)

    expect(screen.getByText("💠 uses")).toBeInTheDocument()
    expect(screen.getByText("uses")).toBeInTheDocument()
})
