import {renderHook} from "@testing-library/react-hooks"
import {useStaticQuery} from "gatsby"
import {useLatestVideos} from "hooks"
import {mockVideos, mockVideosQuery} from "test-utils/mocks"

useStaticQuery.mockReturnValue(mockVideosQuery)

test("returns latest videos", () => {
    const {result} = renderHook(() => useLatestVideos())

    expect(result.current).toHaveLength(2)
    expect(result.current).toEqual(mockVideos)
})
