import Twitter from "components/Twitter"
import {render, screen} from "test-utils/render"

test("renders", () => {
    render(<Twitter title={mockTitle} />)
    expect(screen.getByText(mockTitle))
})
