import {render, screen} from "@testing-library/react"

import PostBody from "./PostBody"

test("shows post body", () => {
    render(<PostBody content={"<p>testing<p>"} />)
    expect(screen.getByText("testing"))
})
