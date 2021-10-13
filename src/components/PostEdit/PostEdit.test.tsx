import {render, screen} from "@testing-library/react"

import PostEdit from "./PostEdit"

test("shows edit button", () => {
    render(<PostEdit slug={"my-test-post"} />)

    expect(screen.getByText("💻 edit on github")).toHaveAttribute(
        "href",
        expect.stringContaining("my-test-post"),
    )
})
