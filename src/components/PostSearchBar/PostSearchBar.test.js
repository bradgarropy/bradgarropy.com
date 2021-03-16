import {Router} from "@reach/router"
import userEvent from "@testing-library/user-event"
import PostSearchBar from "components/PostSearchBar"
import {usePosts} from "hooks"
import {mockPosts} from "test-utils/mocks"
import {render, screen} from "test-utils/render"

jest.mock("hooks")
usePosts.mockReturnValue(mockPosts)

const onSearchMock = jest.fn()
const placeholder = "search blog"
const query = "first"

describe("search bar", () => {
    beforeEach(() => {
        render(
            <Router>
                <PostSearchBar onSearch={onSearchMock} default />
            </Router>,
        )
    })

    test("shows search bar", () => {
        expect(screen.getByPlaceholderText(placeholder))
    })

    test("searches", () => {
        userEvent.type(screen.getByPlaceholderText(placeholder), query)

        expect(screen.getByPlaceholderText(placeholder)).toHaveDisplayValue(
            query,
        )

        expect(onSearchMock).toHaveBeenCalledTimes(6)
        expect(onSearchMock).toHaveBeenLastCalledWith([mockPosts[0]])
        expect(window.location.search).toEqual(`?search=${query}`)
    })
})
