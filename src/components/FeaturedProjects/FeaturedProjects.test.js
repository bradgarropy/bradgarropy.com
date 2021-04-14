import {render, screen} from "@testing-library/react"
import FeaturedProjects from "components/FeaturedProjects"
import {useStaticQuery} from "gatsby"
import {mockProjects, mockProjectsQuery} from "test-utils/mocks"

useStaticQuery.mockReturnValue(mockProjectsQuery)

test("shows featured projects", () => {
    render(<FeaturedProjects />)

    mockProjects.forEach(project => {
        expect(screen.getByText(project.name))
    })
})
