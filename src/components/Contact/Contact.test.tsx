import {render, screen} from "@testing-library/react"
import Contact from "components/Contact"
import {mockContact} from "test-utils/mocks"
import {expect, test} from "vitest"

test.concurrent("shows contact page", () => {
    render(<Contact contact={mockContact} />)
    expect(screen.getByText("contact"))
})
