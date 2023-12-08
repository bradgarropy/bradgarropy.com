import {render, screen} from "@testing-library/react"
import {expect, test} from "vitest"

import PostEdit from "~/components/PostEdit"

test("shows edit button", () => {
    render(<PostEdit slug={"my-test-post"} />)

    expect(screen.getByText("💻 edit on github")).toHaveAttribute(
        "href",
        "https://github.com/bradgarropy/bradgarropy.com/edit/main/content/posts/my-test-post.md",
    )
})
