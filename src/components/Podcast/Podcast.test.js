import Podcast from "components/Podcast"
import {useStaticQuery} from "gatsby"
import {mockPodcast, mockPodcastQuery} from "test-utils/mocks"
import {render, screen} from "test-utils/render"

useStaticQuery.mockReturnValue(mockPodcastQuery)

test("shows podcast", () => {
    render(<Podcast />)

    expect(screen.getByTestId(mockPodcast.title)).toHaveAttribute(
        "href",
        mockPodcast.link,
    )

    expect(screen.getByText("coming soon"))
    expect(screen.getByText("a weekly podcast about web development hosted by"))

    expect(screen.getByText("brad garropy")).toHaveAttribute(
        "href",
        "https://twitter.com/bradgarropy",
    )

    expect(screen.getByText("richard gottleber")).toHaveAttribute(
        "href",
        "https://twitter.com/RGottleber",
    )
})
