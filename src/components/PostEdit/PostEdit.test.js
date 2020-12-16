import PostEdit from "./PostEdit"
import {render, screen} from "test-utils/render"

test("shows edit button", () => {
    render(<PostEdit slug={"my-test-post"} />)

    expect(screen.getByText("💻 edit on github")).toHaveAttribute(
        "href",
        expect.stringContaining("my-test-post"),
    )
})
