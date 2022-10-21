import {render, screen} from "@testing-library/react"
import Layout from "components/Layout"
import {useLive} from "hooks"
import {expect, Mock, test, vi} from "vitest"

vi.mock("hooks/useLive")

const mockUseLive = useLive as Mock
mockUseLive.mockReturnValue(false)

test.concurrent("shows content", () => {
    render(
        <Layout>
            <p>testing</p>
        </Layout>,
    )

    expect(screen.getByText("testing"))
})
