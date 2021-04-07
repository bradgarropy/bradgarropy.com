import FeaturedProjects from "components/FeaturedProjects"
import {render, screen} from "test-utils/render"

test("renders", () => {
    render(<FeaturedProjects />)
    expect(screen.getByText("FeaturedProjects"))
})
