import {RouteComponentProps, Router} from "@reach/router"
import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import PostSearchBar from "components/PostSearchBar"
import {usePosts} from "hooks"
import {FC} from "react"
import {mockPosts} from "test-utils/mocks"

jest.mock("hooks")

const mockUsePosts = usePosts as jest.Mock
mockUsePosts.mockReturnValue(mockPosts)

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

        screen.debug()
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
