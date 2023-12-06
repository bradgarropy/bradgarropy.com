import {render, screen} from "@testing-library/react"

import Sponsors from "~/components/Sponsors"
import {mockSponsors} from "~/test-utils/mocks"

test("shows sponsors page", () => {
    render(<Sponsors sponsors={mockSponsors} />)
    expect(screen.getByText("💜 thank you")).toBeInTheDocument()

    Object.entries(mockSponsors).forEach(([tier]) => {
        expect(screen.getByText(tier)).toBeInTheDocument()
    })
})

test("shows sponsor tier", () => {
    render(<Sponsors sponsors={mockSponsors} />)

    Object.entries(mockSponsors).forEach(([tier, sponsors]) => {
        expect(screen.getByText(tier)).toBeInTheDocument()

        sponsors.forEach(sponsor => {
            expect(
                screen.getByAltText(sponsor.username).parentElement,
            ).toHaveAttribute("href", sponsor.profile)
        })
    })
})

test("shows empty sponsor tier", () => {
    mockSponsors["one-time"] = []

    render(<Sponsors sponsors={mockSponsors} />)

    expect(screen.getByText("be the first")).toHaveAttribute(
        "href",
        "https://bradgarropy.com/sponsor",
    )
})
