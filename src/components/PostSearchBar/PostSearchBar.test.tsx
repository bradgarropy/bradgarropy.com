import {act, render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import PostSearchBar from "components/PostSearchBar"
import {
    mockPosts,
    mockPostsFrontmatter,
    mockSearchParams,
    mockSetSearchParams,
} from "test-utils/mocks"

const onSearchMock = jest.fn()
const mockPlaceholder = "search blog"
const mockQuery = "fourth"

describe("search bar", () => {
    beforeEach(() => {
        render(
            <PostSearchBar
                onSearch={onSearchMock}
                posts={mockPostsFrontmatter}
            />,
        )
    })

    test("shows search bar", () => {
        expect(screen.getByPlaceholderText(mockPlaceholder))
    })

    test("searches", async () => {
        await act(() =>
            userEvent.type(
                screen.getByPlaceholderText(mockPlaceholder),
                mockQuery,
            ),
        )

        expect(screen.getByPlaceholderText(mockPlaceholder)).toHaveDisplayValue(
            mockQuery,
        )

        expect(onSearchMock).toHaveBeenCalledTimes(7)

        expect(onSearchMock).toHaveBeenLastCalledWith([
            mockPosts[3].frontmatter,
        ])

        expect(mockSetSearchParams).toHaveBeenCalledTimes(7)

        expect(mockSetSearchParams).toHaveBeenLastCalledWith(
            `search=${mockQuery}`,
        )
    })
})

describe("search bar with input", () => {
    beforeEach(() => {
        mockSearchParams.get.mockReturnValue(mockQuery)

        render(
            <PostSearchBar
                onSearch={onSearchMock}
                posts={mockPostsFrontmatter}
            />,
        )
    })

    test("shows search bar with input", () => {
        expect(screen.getByPlaceholderText(mockPlaceholder)).toHaveDisplayValue(
            mockQuery,
        )
    })
})
