import {render, screen} from "@testing-library/react"
import FourOhFour from "components/FourOhFour"
import {expect, test} from "vitest"

test.concurrent("shows 404", () => {
    render(<FourOhFour />)
    expect(screen.getByText("404"))
})
