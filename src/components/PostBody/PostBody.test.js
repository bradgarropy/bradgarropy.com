import {render, screen} from "test-utils/render"

import PostBody from "./PostBody"

test("shows post body", () => {
    render(<PostBody content={"<p>testing<p>"} />)
    expect(screen.getByText("testing"))
})
