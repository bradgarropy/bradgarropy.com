import {render, screen} from "@testing-library/react"
import {describe, expect, test} from "vitest"

import Footer from "~/components/Footer"
import {mockUseRouteLoaderData} from "~/test-utils/mocks/remix"

const labels = [
    "bluesky",
    "discord",
    "feed",
    "github",
    "instagram",
    "linkedin",
    "twitch",
    "x",
    "youtube",
]

test("shows social links", () => {
    mockUseRouteLoaderData.mockReturnValue({host: "vercel"})

    render(<Footer />)

    labels.forEach(label => {
        expect(screen.getByLabelText(label)).toBeInTheDocument()
    })
})

describe("hosts", () => {
    test("shows vercel", () => {
        mockUseRouteLoaderData.mockReturnValue({host: "vercel"})

        render(<Footer />)
        expect(screen.getByText("Hosted on Vercel")).toBeInTheDocument()
    })

    test("shows raspberry pi", () => {
        mockUseRouteLoaderData.mockReturnValue({host: "raspberry-pi"})

        render(<Footer />)
        expect(screen.getByText("Hosted on Raspberry Pi")).toBeInTheDocument()
    })
})
