import Markdown from "components/Markdown"
import {render, screen} from "@testing-library/react"

test("renders", () => {
    render(<Markdown />)
    expect(screen.getByText("Markdown"))
})
