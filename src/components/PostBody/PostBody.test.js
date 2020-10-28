import PostBody from "./PostBody"
import {render, screen} from "../../test-utils/render"

test("shows post body", () => {
    render(<PostBody content={"<p>testing<p>"} />)
    expect(screen.getByText("testing"))
})
