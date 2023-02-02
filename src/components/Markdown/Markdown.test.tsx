import {render, screen} from "@testing-library/react"
import Markdown from "components/Markdown"

test("renders", () => {
    render(<Markdown />)
    expect(screen.getByText("Markdown"))
})
