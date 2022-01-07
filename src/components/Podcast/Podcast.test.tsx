import {render, screen} from "@testing-library/react"
import Podcast from "components/Podcast"
import {mockPodcast} from "test-utils/mocks"

test("shows podcast", () => {
    render(<Podcast podcast={mockPodcast} />)

    expect(screen.getByTestId(mockPodcast.title)).toHaveAttribute(
        "href",
        mockPodcast.link,
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
