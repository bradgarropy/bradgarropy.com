import {render, screen} from "@testing-library/react"
import {expect, test} from "vitest"

import PageLayout from "~/components/PageLayout"

test("shows content", () => {
    render(
        <PageLayout>
            <p>testing</p>
        </PageLayout>,
    )

    expect(screen.getByText("testing")).toBeInTheDocument()
})
