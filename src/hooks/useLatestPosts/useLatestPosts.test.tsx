import {renderHook} from "@testing-library/react-hooks"
import {useStaticQuery} from "gatsby"
import {useLatestPosts} from "hooks"
import {mockPosts, mockPostsQuery} from "test-utils/mocks"

const mockUseStaticQuery = useStaticQuery as jest.Mock
mockUseStaticQuery.mockReturnValue(mockPostsQuery)

test("returns latest posts", () => {
    const {result} = renderHook(() => useLatestPosts())

    expect(result.current).toHaveLength(3)
    expect(result.current).toEqual(mockPosts)
})
