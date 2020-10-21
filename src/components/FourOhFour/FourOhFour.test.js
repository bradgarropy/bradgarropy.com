import {render, screen} from "../../test-utils/utils"
import FourOhFour from "./FourOhFour"

test("shows 404", () => {
    render(<FourOhFour />)
    expect(screen.getByText("404"))
})
