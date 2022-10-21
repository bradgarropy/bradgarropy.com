import {render, screen} from "@testing-library/react"
import ProjectTech from "components/ProjectTech"
import {mockProjects} from "test-utils/mocks"
import {expect, test} from "vitest"

test.concurrent("shows technologies", () => {
    render(<ProjectTech project={mockProjects[0]} />)

    expect(screen.getByLabelText("gatsby"))
    expect(screen.getByLabelText("react"))
})
