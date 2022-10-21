import {render, screen} from "@testing-library/react"
import PostFooter from "components/PostFooter"
import {useMeta} from "hooks"
import {mockMeta} from "test-utils/mocks"
import {expect, Mock, test, vi} from "vitest"

vi.mock("hooks")

const mockUseMeta = useMeta as Mock
mockUseMeta.mockReturnValue(mockMeta)

test.concurrent("shows comment button", () => {
    render(<PostFooter slug={"my-test-post"} />)
    expect(screen.getByText("💬 discuss on twitter"))
})

test.concurrent("shows edit button", () => {
    render(<PostFooter slug={"my-test-post"} />)
    expect(screen.getByText("💻 edit on github"))
})
