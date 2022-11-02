import {render, screen} from "@testing-library/react"
import Connect from "components/Connect"

test("shows connect", () => {
    render(<Connect />)

    expect(screen.getByAltText("bg"))
    expect(screen.getByText("Hey, thanks for talking with me!"))
    expect(screen.getByText("Connect with me on the following platforms."))

    const labels = [
        "twitch",
        "github",
        "youtube",
        "twitter",
        "instagram",
        "discord",
    ]

    labels.forEach(label => expect(screen.getByLabelText(label)))
})
