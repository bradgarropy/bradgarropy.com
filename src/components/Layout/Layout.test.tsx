import {render, screen} from "@testing-library/react"

import Layout from "~/components/Layout"
import useLive from "~/hooks/useLive"

jest.mock("hooks/useLive")

const mockUseLive = useLive as jest.Mock
mockUseLive.mockReturnValue(false)

test("shows content", () => {
    render(
        <Layout>
            <p>testing</p>
        </Layout>,
    )

    expect(screen.getByText("testing")).toBeInTheDocument()
})
