import {render, screen} from "@testing-library/react"
import {expect, test} from "vitest"

import Footer from "~/components/Footer"

const labels = [
    "discord",
    "feed",
    "github",
    "instagram",
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
