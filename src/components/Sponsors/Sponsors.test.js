import {render, screen} from "@testing-library/react"
import Sponsors from "components/Sponsors"

test("renders", () => {
    render(<Sponsors />)
    expect(screen.getByText("Sponsors"))
})
