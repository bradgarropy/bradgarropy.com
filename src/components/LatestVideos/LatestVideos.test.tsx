import {render, screen} from "@testing-library/react"
import {expect, test} from "vitest"

import LatestVideos from "~/components/LatestVideos"
import {mockVideos} from "~/test-utils/mocks"

test("shows latest videos", () => {
    render(<LatestVideos latestVideos={mockVideos} />)

    mockVideos.forEach(video => {
        const videoThumbnail = screen.getByAltText(video.title)
        const videoLink = videoThumbnail.parentElement

        expect(videoLink).toHaveAttribute(
            "href",
            `https://www.youtube.com/watch?v=${video.id}`,
        )
    })
})

test("handles youtube api limit", () => {
    render(<LatestVideos latestVideos={[]} />)

    expect(
        screen.getByText("⛔️ YouTube API Limit Reached"),
    ).toBeInTheDocument()
})
