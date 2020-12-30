import {render, screen} from "test-utils/render"

import PostFooter from "./PostFooter"

const mockQuery = {
    site: {
        siteMetadata: {
            siteUrl: "https://bradgarropy.com",
        },
    },
}

useStaticQuery.mockReturnValue(mockQuery)

test("shows comment button", () => {
    render(<PostFooter slug={"my-test-post"} />)
    expect(screen.getByText("💬 discuss on twitter"))
})

test("shows edit button", () => {
    render(<PostFooter slug={"my-test-post"} />)
    expect(screen.getByText("💻 edit on github"))
})
