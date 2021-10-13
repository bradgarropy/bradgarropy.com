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

const mockUseLatestPosts = useLatestPosts as jest.Mock
mockUseLatestPosts.mockReturnValue(mockPosts)

const mockUseLatestVideos = useLatestVideos as jest.Mock
mockUseLatestVideos.mockReturnValue(mockVideos)

const mockUseProjects = useProjects as jest.Mock
mockUseProjects.mockReturnValue(mockProjects)

const mockUsePodcast = usePodcast as jest.Mock
mockUsePodcast.mockReturnValue(mockPodcast)

test("shows home page", () => {
    render(<Home />)

    expect(screen.getByText("i'm brad garropy"))
    expect(screen.getByText("blog"))
    expect(screen.getByText("videos"))
    expect(screen.getByText("projects"))
    expect(screen.getByText("podcast"))
})
