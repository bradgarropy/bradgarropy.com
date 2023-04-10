import TagFilter from "components/TagFilter"
import {render, screen} from "@testing-library/react"

test("renders", () => {
    render(<TagFilter />)
    expect(screen.getByText("TagFilter"))
})
