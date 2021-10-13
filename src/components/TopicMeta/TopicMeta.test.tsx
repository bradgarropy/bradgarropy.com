import {render, screen} from "@testing-library/react"
import {mockTopic} from "test-utils/mocks"

import TopicMeta from "./TopicMeta"

test("shows meta", () => {
    render(<TopicMeta topic={mockTopic} />)
    expect(screen.getByText(`${mockTopic.icon} ${mockTopic.name}`))
})
