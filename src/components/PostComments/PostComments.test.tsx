import {render, screen} from "@testing-library/react"
import type {Mock} from "vitest"
import {expect, test, vi} from "vitest"

import PostComments from "~/components/PostComments"
import useMeta from "~/hooks/useMeta"
import {mockMeta} from "~/test-utils/mocks"

vi.mock("~/hooks/useMeta")

const mockUseMeta = useMeta as Mock
mockUseMeta.mockReturnValue(mockMeta)

test("shows comment button", () => {
    render(<PostComments slug={"my-test-post"} />)

    expect(screen.getByText("💬 discuss on twitter")).toHaveAttribute(
        "href",
        expect.stringContaining("my-test-post"),
    )
})
