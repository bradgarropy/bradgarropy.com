import {render, screen} from "@testing-library/react"

import Layout from "./Layout"

test("shows content", () => {
    render(
        <Layout>
            <p>testing</p>
        </Layout>,
    )

    expect(screen.getByText("testing"))
})
