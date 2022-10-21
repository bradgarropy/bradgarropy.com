import {render, screen} from "@testing-library/react"
import Footer from "components/Footer"
import {expect, test} from "vitest"

const labels = [
    "twitch",
    "github",
    "youtube",
    "twitter",
    "instagram",
    "discord",
]

test.concurrent("shows social links", () => {
    render(<Footer />)
    labels.forEach(label => expect(screen.getByLabelText(label)))
})
