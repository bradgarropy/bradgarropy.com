import PostEdit from "./PostEdit"
import {render, screen} from "../../test-utils/render"

test("shows edit button", () => {
    render(<PostEdit slug={"my-test-post"} />)

    const editLink = screen.getByText("edit on github").parentElement

    expect(editLink).toHaveAttribute(
        "href",
        expect.stringContaining("my-test-post"),
    )
})
