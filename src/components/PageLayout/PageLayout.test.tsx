import {render, screen} from "@testing-library/react"

import PageLayout from "~/components/PageLayout"

test("shows content", () => {
    render(
        <PageLayout>
            <p>testing</p>
        </PageLayout>,
    )

    expect(screen.getByText("testing"))
})
