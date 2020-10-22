import Header from "./Header"
import {render, screen} from "../../test-utils/render"

const links = ["blog", "now", "uses", "hire me", "contact"]

test("shows logo", () => {
    render(<Header />)
    expect(screen.getByLabelText("bg"))
})

test("shows links", () => {
    render(<Header />)
    links.forEach(link => expect(screen.getByText(link)))
})
