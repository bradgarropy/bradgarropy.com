import {render, screen} from "@testing-library/react"
import type {Mock} from "vitest"
import {expect, test, vi} from "vitest"

import PostFooter from "~/components/PostFooter"
import useMeta from "~/hooks/useMeta"
import {mockMeta} from "~/test-utils/mocks"

vi.mock("~/hooks/useMeta")

const mockUseMeta = useMeta as Mock
mockUseMeta.mockReturnValue(mockMeta)

test("shows comment button", () => {
    render(<PostFooter slug={"my-test-post"} />)
    expect(screen.getByText("💬 discuss on twitter")).toBeInTheDocument()
})

test("shows edit button", () => {
    render(<PostFooter slug={"my-test-post"} />)
    expect(screen.getByText("💻 edit on github")).toBeInTheDocument()
})
