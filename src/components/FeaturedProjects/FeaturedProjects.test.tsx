import {render, screen} from "@testing-library/react"
import FeaturedProjects from "components/FeaturedProjects"
import {mockProjects} from "test-utils/mocks"
import {expect, test} from "vitest"

test("shows featured projects", () => {
    render(<FeaturedProjects featuredProjects={mockProjects} />)

    mockProjects.forEach(project => {
        expect(screen.getByText(project.name))
    })
})
