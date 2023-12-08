import {render, screen} from "@testing-library/react"
import {expect, test} from "vitest"

import Podcasts from "~/components/Podcasts"

test("shows podcast", () => {
    render(<Podcasts />)

    const webDevWeeklyCover = screen.getByAltText("Web Dev Weekly")
    const webDevWeeklyLink = webDevWeeklyCover.parentElement

    expect(webDevWeeklyLink).toHaveAttribute(
        "href",
        "https://open.spotify.com/show/3TAuVah0Q9BOV5PbwPDGfs",
    )

    const compressedCover = screen.getByAltText("Compressed.fm")
    const compressedLink = compressedCover.parentElement

    expect(compressedLink).toHaveAttribute(
        "href",
        "https://open.spotify.com/show/7Er1m8VEzRNu59ZhaS18WY",
    )
})
