import {render, screen} from "@testing-library/react"

import ProjectTech from "~/components/ProjectTech"
import {mockProjects} from "~/test-utils/mocks"

test("shows technologies", () => {
    render(<ProjectTech project={mockProjects[0]} />)

    expect(screen.getByLabelText("gatsby"))
    expect(screen.getByLabelText("react"))
})
