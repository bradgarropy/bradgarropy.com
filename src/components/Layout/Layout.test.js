import {render, screen} from "@testing-library/react"
import {useLive} from "hooks"

import Layout from "./Layout"

jest.mock("hooks/useLive")
useLive.mockReturnValue(false)

test("shows content", () => {
    render(
        <Layout>
            <p>testing</p>
        </Layout>,
    )

    expect(screen.getByText("testing"))
})
