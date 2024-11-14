import {render, screen} from "@testing-library/react"
import {expect, test} from "vitest"

import Connect from "~/components/Connect"

test("shows connect", () => {
    render(<Connect />)

    expect(screen.getByAltText("bg")).toBeInTheDocument()
    expect(screen.getByText("Thanks for chatting with me!")).toBeInTheDocument()

    expect(
        screen.getByText("Let's connect on these platforms."),
    ).toBeInTheDocument()

    const labels = [
        "bluesky",
        "discord",
        "feed",
        "github",
        "instagram",
        "twitch",
        "x",
        "youtube",
    ]

    labels.forEach(label => {
        expect(screen.getByLabelText(label)).toBeInTheDocument()
    })
})
