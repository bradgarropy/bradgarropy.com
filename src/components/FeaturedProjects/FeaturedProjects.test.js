import FeaturedProjects from "components/FeaturedProjects"
import {useStaticQuery} from "gatsby"
import {mockProjects, mockProjectsQuery} from "test-utils/mocks"
import {render, screen} from "test-utils/render"

useStaticQuery.mockReturnValue(mockProjectsQuery)

test("shows featured projects", () => {
    render(<FeaturedProjects />)

    mockProjects.forEach(project => {
        expect(screen.getByText(project.name))
    })
})
