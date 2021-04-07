import Project from "components/Project"
import {render, screen} from "test-utils/render"

test("renders", () => {
    render(<Project />)
    expect(screen.getByText("Project"))
})
