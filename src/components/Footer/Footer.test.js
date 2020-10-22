import {render, screen} from "../../test-utils/render"
import Footer from "./Footer"

const labels = [
    "twitch",
    "github",
    "youtube",
    "twitter",
    "instagram",
    "discord",
]

test("shows social links", () => {
    render(<Footer />)
    labels.forEach(label => expect(screen.getByLabelText(label)))
})
