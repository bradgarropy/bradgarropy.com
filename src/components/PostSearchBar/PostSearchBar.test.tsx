import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import PostSearchBar from "components/PostSearchBar"
import * as nextRouter from "next/router"
import {mockPosts, mockPostsFrontmatter} from "test-utils/mocks"

const onSearchMock = jest.fn()
const mockPlaceholder = "search blog"
const mockQuery = "fourth"

const mockUseRouter = jest.spyOn(nextRouter, "useRouter")
const mockPush = jest.fn()

describe("search bar", () => {
    beforeEach(() => {
        mockUseRouter.mockReturnValue({
            asPath: "",
            back: jest.fn(),
            basePath: "",
            beforePopState: jest.fn(),
            events: {
                on: jest.fn(),
                off: jest.fn(),
                emit: jest.fn(),
            },
            forward: jest.fn(),
            isFallback: false,
            isLocaleDomain: false,
            isPreview: false,
            isReady: true,
            pathname: "/blog",
            prefetch: jest.fn(),
            push: mockPush,
            replace: jest.fn(),
            reload: jest.fn(),
            route: "",
            query: {},
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

    test("searches", async () => {
        await userEvent.type(
            screen.getByPlaceholderText(mockPlaceholder),
            mockQuery,
        )

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
            asPath: "",
            back: jest.fn(),
            basePath: "",
            beforePopState: jest.fn(),
            events: {
                on: jest.fn(),
                off: jest.fn(),
                emit: jest.fn(),
            },
            forward: jest.fn(),
            isFallback: false,
            isLocaleDomain: false,
            isPreview: false,
            isReady: true,
            pathname: "/blog",
            prefetch: jest.fn(),
            push: mockPush,
            replace: jest.fn(),
            reload: jest.fn(),
            route: "",
            query: {
                search: mockQuery,
            },
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
