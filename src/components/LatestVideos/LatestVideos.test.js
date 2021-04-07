import LatestVideos from "components/LatestVideos"
import {useLatestVideos} from "hooks"
import {mockVideos} from "test-utils/mocks"
import {render, screen} from "test-utils/render"

jest.mock("hooks")
useLatestVideos.mockReturnValue(mockVideos)

test("renders", () => {
    render(<LatestVideos />)

    mockVideos.forEach(video => {
        expect(screen.getByTestId(video.videoId).parentElement).toHaveAttribute(
            "href",
            `https://www.youtube.com/watch?v=${video.videoId}`,
        )
    })
})
