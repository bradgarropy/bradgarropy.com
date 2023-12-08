import {render, screen} from "@testing-library/react"
import {expect, test} from "vitest"

import FeaturedProjects from "~/components/FeaturedProjects"
import {mockProjects} from "~/test-utils/mocks"

test("shows featured projects", () => {
    render(<FeaturedProjects featuredProjects={mockProjects} />)

    mockProjects.forEach(project => {
        expect(screen.getByText(project.name)).toBeInTheDocument()
    })
})
