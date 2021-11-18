import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Newsletter from "components/Newsletter"

test("shows newsletter", () => {
    render(<Newsletter />)

    expect(screen.getByText("side projects", {exact: false}))
    expect(screen.getByText("web dev news", {exact: false}))
    expect(screen.getByText("tech opinions", {exact: false}))

    expect(screen.getByPlaceholderText("email@example.com"))
    expect(screen.getByText("subscribe", {exact: false}))
})

test("subscribes", () => {
    render(<Newsletter />)

    const form = screen.getByPlaceholderText("email@example.com")
    userEvent.type(form, "bradgarropy@gmail.com")

    expect(form).toHaveValue("bradgarropy@gmail.com")
})
