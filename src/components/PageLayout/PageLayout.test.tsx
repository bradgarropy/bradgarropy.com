import {render, screen} from "@testing-library/react"

import PageLayout from "./PageLayout"

test("shows content", () => {
    render(
        <PageLayout>
            <p>testing</p>
        </PageLayout>,
    )

    expect(screen.getByText("testing"))
})
