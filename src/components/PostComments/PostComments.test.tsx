import {render, screen} from "@testing-library/react"

import PostComments from "~/components/PostComments"
import useMeta from "~/hooks/useMeta"
import {mockMeta} from "~/test-utils/mocks"

jest.mock("~/hooks/useMeta")

const mockUseMeta = useMeta as jest.Mock
mockUseMeta.mockReturnValue(mockMeta)

test("shows comment button", () => {
    render(<PostComments slug={"my-test-post"} />)

    expect(screen.getByText("💬 discuss on twitter")).toHaveAttribute(
        "href",
        expect.stringContaining("my-test-post"),
    )
})
