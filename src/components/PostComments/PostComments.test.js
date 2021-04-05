import {useMeta} from "hooks"
import {mockMeta} from "test-utils/mocks"
import {render, screen} from "test-utils/render"

import PostComments from "./PostComments"

jest.mock("hooks")
useMeta.mockReturnValue(mockMeta)

test("shows comment button", () => {
    render(<PostComments slug={"my-test-post"} />)

    expect(screen.getByText("💬 discuss on twitter")).toHaveAttribute(
        "href",
        expect.stringContaining("my-test-post"),
    )
})
