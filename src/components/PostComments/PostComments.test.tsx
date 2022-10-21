import {render, screen} from "@testing-library/react"
import PostComments from "components/PostComments"
import {useMeta} from "hooks"
import {mockMeta} from "test-utils/mocks"
import {expect, Mock, test, vi} from "vitest"

vi.mock("hooks")

const mockUseMeta = useMeta as Mock
mockUseMeta.mockReturnValue(mockMeta)

test.concurrent("shows comment button", () => {
    render(<PostComments slug={"my-test-post"} />)

    expect(screen.getByText("💬 discuss on twitter")).toHaveAttribute(
        "href",
        expect.stringContaining("my-test-post"),
    )
})
