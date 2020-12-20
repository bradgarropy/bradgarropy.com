import {render, screen} from "test-utils/render"

import PostMeta from "./PostMeta"

const mockDate = "January 1, 2021"

const mockTopic = {
    icon: "😎",
    name: "life",
}

test("shows meta", () => {
    render(<PostMeta date={mockDate} topic={mockTopic} />)

    expect(screen.getByText(mockDate, {exact: false}))
    expect(screen.getByText(`#${mockTopic.name}`))
})

test("links to topic", () => {
    render(<PostMeta date={mockDate} topic={mockTopic} />)

    expect(screen.getByText(`#${mockTopic.name}`)).toHaveAttribute(
        "href",
        `/topic/${mockTopic.name}`,
    )
})
