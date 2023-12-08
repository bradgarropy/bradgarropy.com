import {render, screen} from "@testing-library/react"
import type {Mock} from "vitest"
import {expect, test, vi} from "vitest"

import Layout from "~/components/Layout"
import useLive from "~/hooks/useLive"

vi.mock("~/hooks/useLive")

const mockUseLive = useLive as Mock
mockUseLive.mockReturnValue(false)

test("shows content", () => {
    render(
        <Layout>
            <p>testing</p>
        </Layout>,
    )

    expect(screen.getByText("testing")).toBeInTheDocument()
})
