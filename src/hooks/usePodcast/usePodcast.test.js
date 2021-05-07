import {renderHook} from "@testing-library/react-hooks"
import {useStaticQuery} from "gatsby"
import {usePodcast} from "hooks"
import {mockPodcast, mockPodcastQuery} from "test-utils/mocks"

useStaticQuery.mockReturnValue(mockPodcastQuery)

test("returns podcast", () => {
    const {result} = renderHook(() => usePodcast())
    expect(result.current).toEqual(mockPodcast)
})
