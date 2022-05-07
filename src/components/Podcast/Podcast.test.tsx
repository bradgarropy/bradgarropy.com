import {render, screen} from "@testing-library/react"
import Podcast from "components/Podcast"

test("shows podcast", () => {
    render(<Podcast />)

    const podcastCover = screen.getByAltText("Web Dev Weekly")
    const podcastLink = podcastCover.parentElement.parentElement

    expect(podcastLink).toHaveAttribute(
        "href",
        "https://open.spotify.com/show/3TAuVah0Q9BOV5PbwPDGfs",
    )

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
