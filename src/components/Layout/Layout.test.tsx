import {render, screen} from "@testing-library/react"
import {expect, test, vi} from "vitest"

import Layout from "~/components/Layout"
import useLive from "~/hooks/useLive"

vi.mock("~/hooks/useLive")

const mockUseLive = vi.mocked(useLive)
mockUseLive.mockReturnValue(false)

test("shows content", () => {
    render(
        <Layout>
            <p>testing</p>
        </Layout>,
    )

    expect(screen.getByText("testing")).toBeInTheDocument()
})
