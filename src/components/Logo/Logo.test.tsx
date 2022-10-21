import {render} from "@testing-library/react"
import {test} from "vitest"

import Logo from "./Logo"

test("shows logo", () => {
    render(<Logo />)
})
