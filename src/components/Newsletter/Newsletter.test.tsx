import {http} from "@bradgarropy/http"
import {act, render, screen, waitFor} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Newsletter from "components/Newsletter"

jest.mock("@bradgarropy/http")

test("shows newsletter", () => {
    render(<Newsletter />)

    expect(screen.getByText("💻 side projects", {exact: false}))
    expect(screen.getByText("📰 web dev news", {exact: false}))
    expect(screen.getByText("⚡ tech opinions", {exact: false}))

    expect(screen.getByPlaceholderText("email@example.com"))
    expect(screen.getByText("📧 subscribe"))
})

test("subscribes", async () => {
    render(<Newsletter />)

    const form = screen.getByPlaceholderText("email@example.com")
    await act(() => userEvent.type(form, "bradgarropy@gmail.com"))

    expect(form).toHaveValue("bradgarropy@gmail.com")

    const subscribeButton = screen.getByText("📧 subscribe")
    await act(() => userEvent.click(subscribeButton))

    expect(http.post).toHaveBeenCalledTimes(1)

    expect(http.post).toHaveBeenCalledWith("/api/subscribe", {
        body: {
            email: "bradgarropy@gmail.com",
        },
    })

    waitFor(() => {
        const subscribedButton = screen.getByText("💜 subscribed")
        expect(subscribedButton)
    })
})
