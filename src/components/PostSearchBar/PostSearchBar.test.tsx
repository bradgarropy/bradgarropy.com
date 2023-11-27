import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import PostSearchBar from "~/components/PostSearchBar"
import {mockPosts, mockPostsFrontmatter} from "~/test-utils/mocks"
import {mockSearchParams} from "~/test-utils/mocks/remix"

const onSearchMock = jest.fn()
const mockPlaceholder = "search by title, topic, or tag..."
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
        await userEvent.type(
            screen.getByPlaceholderText(mockPlaceholder),
            mockQuery,
        )

        expect(screen.getByPlaceholderText(mockPlaceholder)).toHaveDisplayValue(
            mockQuery,
        )

        expect(window.location.search).toEqual(`?search=${mockQuery}`)

        expect(onSearchMock).toHaveBeenCalledTimes(7)

        expect(onSearchMock).toHaveBeenLastCalledWith([
            mockPosts[3].frontmatter,
        ])
    })
})

describe("search bar with input", () => {
    beforeEach(() => {
        mockSearchParams.get.mockReturnValueOnce(mockQuery)

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
