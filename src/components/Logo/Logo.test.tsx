import {render} from "@testing-library/react"
import {test} from "vitest"

import Logo from "~/components/Logo"

test("shows logo", () => {
    render(<Logo />)
})
