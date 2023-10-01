import {render, screen} from "@testing-library/react"

import Connect from "~/components/Connect"

test("shows connect", () => {
    render(<Connect />)

    expect(screen.getByAltText("bg"))
    expect(screen.getByText("Thanks for chatting with me!"))
    expect(screen.getByText("Let's connect on these platforms."))

    const labels = ["twitch", "github", "youtube", "x", "instagram", "discord"]

    labels.forEach(label => expect(screen.getByLabelText(label)))
})
