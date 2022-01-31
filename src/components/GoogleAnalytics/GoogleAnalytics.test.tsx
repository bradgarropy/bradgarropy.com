import {render} from "@testing-library/react"
import GoogleAnalytics from "components/GoogleAnalytics"

test("initializes google analytics", () => {
    render(<GoogleAnalytics measurementId="abc123" />)
})
