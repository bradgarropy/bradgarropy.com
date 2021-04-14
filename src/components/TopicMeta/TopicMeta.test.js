import {render, screen} from "@testing-library/react"

import TopicMeta from "./TopicMeta"

const mockTopic = {
    icon: "😎",
    name: "life",
}

test("shows meta", () => {
    render(<TopicMeta topic={mockTopic} />)
    expect(screen.getByText(`${mockTopic.icon} ${mockTopic.name}`))
})
