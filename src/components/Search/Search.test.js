import userEvent from "@testing-library/user-event"
import {render, screen} from "test-utils/render"

import Search from "./Search"

const onSearchMock = jest.fn()
const placeholder = "search blog"
const query = "search blog"

test("shows search bar", () => {
    render(<Search onSearch={onSearchMock} />)
    expect(screen.getByPlaceholderText(placeholder))
})

test("searches", () => {
    render(<Search onSearch={onSearchMock} />)

    userEvent.type(screen.getByPlaceholderText(placeholder), query)

    expect(onSearchMock).toHaveBeenLastCalledWith(query)
    expect(screen.getByPlaceholderText(placeholder)).toHaveDisplayValue(query)
})
