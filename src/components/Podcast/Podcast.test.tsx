import {render, screen} from "@testing-library/react"
import Podcast from "components/Podcast"
import {mockPodcast} from "test-utils/mocks"

test("shows podcast", () => {
    render(<Podcast podcast={mockPodcast} />)

    const podcastCover = screen.getByAltText(mockPodcast.title)
    const podcastLink = podcastCover.parentElement.parentElement

    expect(podcastLink).toHaveAttribute("href", mockPodcast.link)
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
