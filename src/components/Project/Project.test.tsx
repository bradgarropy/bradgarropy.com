import {render, screen} from "@testing-library/react"

import Project from "~/components/Project"
import {mockProjects} from "~/test-utils/mocks"

test("shows project", () => {
    render(<Project project={mockProjects[0]} />)

    expect(screen.getByText(mockProjects[0].name))
    expect(screen.getByText(mockProjects[0].description))
    expect(screen.getByText(`${mockProjects[0].stars}⭐`))
})
