import Facebook from "components/Facebook"
import {render, screen} from "test-utils/render"

test("renders", () => {
    render(<Facebook title={mockTitle} />)
    expect(screen.getByText(mockTitle))
})
