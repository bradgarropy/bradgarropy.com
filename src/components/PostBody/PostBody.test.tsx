import {render, screen} from "@testing-library/react"
import {mockPost} from "test-utils/mocks"

import PostBody from "./PostBody"

test("shows post body", () => {
    render(<PostBody html={mockPost.html} />)
    expect(screen.getByText("first test post"))
})
