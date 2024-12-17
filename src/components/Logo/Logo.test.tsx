import {render} from "@testing-library/react"
import {expect, test} from "vitest"

import Logo from "~/components/Logo"

test("shows logo", () => {
    const {container} = render(<Logo />)
    expect(container.getElementsByTagName("svg")).toHaveLength(1)
})
