import SEO from "components/SEO"
import {render, screen} from "test-utils/render"

test("renders", () => {
    render(<SEO title={mockTitle} />)
    expect(screen.getByText(mockTitle))
})
