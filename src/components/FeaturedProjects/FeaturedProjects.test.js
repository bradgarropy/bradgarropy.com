import FeaturedProjects from "components/FeaturedProjects"
import {mockProjects} from "test-utils/mocks"
import {render, screen} from "test-utils/render"

test("shows featured projects", () => {
    render(<FeaturedProjects />)

    mockProjects.forEach(project => {
        expect(screen.getByText(project.title))
    })
})
