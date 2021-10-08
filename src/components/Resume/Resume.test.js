import {render, screen} from "@testing-library/react"
import Resume from "components/Resume"

test("renders", () => {
    render(<Resume />)
    expect(screen.getByText("Resume"))
})
