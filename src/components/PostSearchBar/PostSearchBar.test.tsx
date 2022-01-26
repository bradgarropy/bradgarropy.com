import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import PostSearchBar from "components/PostSearchBar"
import {useRouter} from "next/router"
import {mockPosts, mockPostsFrontmatter} from "test-utils/mocks"

const onSearchMock = jest.fn()
const mockPlaceholder = "search blog"
const mockQuery = "fourth"

jest.mock("next/router")
const mockUseRouter = useRouter as jest.Mock
const mockPush = jest.fn()

describe("search bar", () => {
    beforeEach(() => {
        mockUseRouter.mockReturnValue({
            pathname: "/blog",
            query: {},
            push: mockPush,
        })

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

    test("searches", () => {
        userEvent.type(screen.getByPlaceholderText(mockPlaceholder), mockQuery)

        expect(screen.getByPlaceholderText(mockPlaceholder)).toHaveDisplayValue(
            mockQuery,
        )

        expect(onSearchMock).toHaveBeenCalledTimes(7)

        expect(onSearchMock).toHaveBeenLastCalledWith([
            mockPosts[3].frontmatter,
        ])

        expect(mockPush).toHaveBeenCalledTimes(7)

        expect(mockPush).toHaveBeenLastCalledWith(
            `/blog?search=${mockQuery}`,
            undefined,
            {
                shallow: true,
            },
        )
    })
})

describe("search bar with input", () => {
    beforeEach(() => {
        mockUseRouter.mockReturnValue({
            pathname: "/blog",
            query: {
                search: mockQuery,
            },
            push: mockPush,
        })

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
