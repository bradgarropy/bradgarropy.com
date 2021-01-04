import {render, screen} from "test-utils/render"

import Layout from "./Layout"

test("shows content", () => {
    render(
        <Layout>
            <p>testing</p>
        </Layout>,
    )

    expect(screen.getByText("testing"))
})
