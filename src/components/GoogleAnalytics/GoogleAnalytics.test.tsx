import {render} from "@testing-library/react"
import {test} from "vitest"

import GoogleAnalytics from "~/components/GoogleAnalytics"

test("renders script tags", async () => {
    render(<GoogleAnalytics measurementId="test" />)
})
