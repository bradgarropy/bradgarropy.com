import {renderHook} from "@testing-library/react-hooks"
import {useStaticQuery} from "gatsby"
import {usePosts} from "hooks"
import {mockPosts, mockPostsQuery} from "test-utils/mocks"

useStaticQuery.mockReturnValue(mockPostsQuery)

test("returns posts", () => {
    const {result} = renderHook(() => usePosts())
    expect(result.current).toEqual(mockPosts)
})
