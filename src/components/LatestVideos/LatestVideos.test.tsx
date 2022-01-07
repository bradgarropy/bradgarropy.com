import {render, screen} from "@testing-library/react"
import LatestVideos from "components/LatestVideos"
import {mockVideos} from "test-utils/mocks"

test("renders", () => {
    render(<LatestVideos latestVideos={mockVideos} />)

    mockVideos.forEach(video => {
        expect(screen.getByTestId(video.id).parentElement).toHaveAttribute(
            "href",
            `https://www.youtube.com/watch?v=${video.id}`,
        )
    })
})
