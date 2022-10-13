import {render, screen} from "@testing-library/react"
import PostEdit from "components/PostEdit"
import {expect, test} from "vitest"

test("shows edit button", () => {
    render(<PostEdit slug={"my-test-post"} />)

    expect(screen.getByText("💻 edit on github")).toHaveAttribute(
        "href",
        "https://github.com/bradgarropy/bradgarropy.com/edit/master/content/posts/my-test-post.md",
    )
})
