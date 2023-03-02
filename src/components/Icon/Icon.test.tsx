import {render, screen} from "@testing-library/react"
import Icon from "components/Icon"
import {technologies} from "utils"

const icons = [...technologies, "sun", "moon"]

test("shows icons", () => {
    icons.forEach(icon => {
        render(<Icon name={icon} />)
        expect(screen.getByLabelText(icon))
    })
})

test("shows icons with props", () => {
    icons.forEach(icon => {
        render(<Icon name={icon} className="test" />)
        expect(screen.getByLabelText(icon)).toHaveClass("test")
    })
})

test("shows default", () => {
    render(<Icon name="test" />)
    expect(screen.queryByLabelText("text")).toBeNull()
})
