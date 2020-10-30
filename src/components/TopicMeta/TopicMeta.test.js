import TopicMeta from "./TopicMeta"
import {render, screen} from "test-utils/render"

const mockTopic = {
    icon: "😎",
    name: "life",
}

test("shows meta", () => {
    render(<TopicMeta topic={mockTopic} />)
    expect(screen.getByText(`${mockTopic.icon} ${mockTopic.name}`))
})
