import {render, screen} from "@testing-library/react"
import Home from "components/Home"
import {useLatestPosts, useLatestVideos, usePodcast, useProjects} from "hooks"
import {
    mockPodcast,
    mockPosts,
    mockProjects,
    mockVideos,
} from "test-utils/mocks"

jest.mock("hooks")
useLatestPosts.mockReturnValue(mockPosts)
useLatestVideos.mockReturnValue(mockVideos)
useProjects.mockReturnValue(mockProjects)
usePodcast.mockReturnValue(mockPodcast)

test("shows home page", () => {
    render(<Home />)

    expect(screen.getByText("i'm brad garropy"))
    expect(screen.getByText("blog"))
    expect(screen.getByText("videos"))
    expect(screen.getByText("projects"))
    expect(screen.getByText("podcast"))
})
