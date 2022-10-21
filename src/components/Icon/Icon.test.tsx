import {render, screen} from "@testing-library/react"
import Icon from "components/Icon"
import {technologies} from "utils"
import {expect, test} from "vitest"

test.concurrent("shows icons", () => {
    technologies.forEach(technology => {
        render(<Icon name={technology} />)
        expect(screen.getByLabelText(technology))
    })
})

test.concurrent("shows default", () => {
    render(<Icon name="test" />)
    expect(screen.queryByLabelText("text")).toBeNull()
})
