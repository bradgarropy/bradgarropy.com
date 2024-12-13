import {render} from "@testing-library/react"
import {expect, test} from "vitest"

import GoogleAnalytics from "~/components/GoogleAnalytics"

test("renders script tags", async () => {
    const {baseElement} = render(<GoogleAnalytics measurementId="test" />)
    expect(baseElement.children).toHaveLength(1)
})
