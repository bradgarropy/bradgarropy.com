import {render, screen} from "@testing-library/react"

import Uses from "~/components/Uses"
import {mockUses} from "~/test-utils/mocks"

test("shows uses", () => {
    render(<Uses uses={mockUses} />)

    expect(screen.getByText("💠 uses"))
    expect(screen.getByText("uses"))
})
