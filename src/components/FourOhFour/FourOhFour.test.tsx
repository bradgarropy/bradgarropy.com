import {render, screen} from "@testing-library/react"

import FourOhFour from "~/components/FourOhFour"

test("shows 404", () => {
    render(<FourOhFour />)
    expect(screen.getByText("404"))
})
