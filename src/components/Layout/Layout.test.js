import Layout from "./Layout"
import {render, screen} from "../../test-utils/render"

test("shows content", () => {
    render(
        <Layout>
            <p>testing</p>
        </Layout>,
    )

    expect(screen.getByText("testing"))
})
