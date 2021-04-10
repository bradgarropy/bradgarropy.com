import Podcast from "components/Podcast"
import {useStaticQuery} from "gatsby"
import {mockPodcast, mockPodcastQuery} from "test-utils/mocks"
import {render, screen} from "test-utils/render"

useStaticQuery.mockReturnValue(mockPodcastQuery)

test("shows podcast", () => {
    render(<Podcast />)
    expect(screen.getByText("Podcast"))
})
