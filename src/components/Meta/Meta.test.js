import Meta from "components/Meta"
import {render, screen} from "test-utils/render"

test("renders", () => {
    render(<Meta title={mockTitle} />)
    expect(screen.getByText(mockTitle))
})
