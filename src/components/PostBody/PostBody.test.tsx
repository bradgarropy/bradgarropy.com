import {render, screen} from "@testing-library/react"

import PostBody from "~/components/PostBody"
import {mockPost} from "~/test-utils/mocks"

test("shows post body", () => {
    render(<PostBody html={mockPost.html} />)
    expect(screen.getByText("This is the first test post."))
})
