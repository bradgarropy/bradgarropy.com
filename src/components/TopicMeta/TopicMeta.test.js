import {render, screen} from "test-utils/render"

import TopicMeta from "./TopicMeta"

const mockTopic = {
    icon: "😎",
    name: "life",
}

test("shows meta", () => {
    render(<TopicMeta topic={mockTopic} />)
    expect(screen.getByText(`${mockTopic.icon} ${mockTopic.name}`))
})
