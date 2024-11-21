import {render, screen} from "@testing-library/react"
import {expect, test} from "vitest"

import Footer from "~/components/Footer"

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
    render(<Footer />)
    labels.forEach(label => {
        expect(screen.getByLabelText(label)).toBeInTheDocument()
    })
})
