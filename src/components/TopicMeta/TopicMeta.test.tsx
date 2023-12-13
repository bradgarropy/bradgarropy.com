import {render, screen} from "@testing-library/react"
import {expect, test} from "vitest"

import TopicMeta from "~/components/TopicMeta"
import {mockTopic} from "~/test-utils/mocks"

test("shows meta", () => {
    render(<TopicMeta topic={mockTopic} />)

    expect(
        screen.getByText(`${mockTopic.icon} ${mockTopic.name}`),
    ).toBeInTheDocument()
})
