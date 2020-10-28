import {useStaticQuery} from "gatsby"
import PostComments from "./PostComments"
import {render, screen} from "../../test-utils/render"

const mockQuery = {
    site: {
        siteMetadata: {
            siteUrl: "https://bradgarropy.com",
        },
    },
}

useStaticQuery.mockReturnValue(mockQuery)

test("shows comment button", () => {
    render(<PostComments slug={"my-test-post"} />)

    const commentLink = screen.getByText("discuss on twitter").parentElement

    expect(commentLink).toHaveAttribute(
        "href",
        expect.stringContaining("my-test-post"),
    )
})
