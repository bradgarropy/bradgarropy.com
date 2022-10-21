import {render, screen} from "@testing-library/react"
import TopicMeta from "components/TopicMeta"
import {mockTopic} from "test-utils/mocks"
import {expect, test} from "vitest"

test("shows meta", () => {
    render(<TopicMeta topic={mockTopic} />)
    expect(screen.getByText(`${mockTopic.icon} ${mockTopic.name}`))
})
