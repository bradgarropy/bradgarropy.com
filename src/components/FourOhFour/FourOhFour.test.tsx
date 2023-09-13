import {render, screen} from "@testing-library/react"

import FourOhFour from "~/components/FourOhFour"
import {mockPostFrontmatter, mockVideos} from "~/test-utils/mocks"

test("shows 404", () => {
    render(<FourOhFour post={mockPostFrontmatter} videos={mockVideos} />)

    expect(screen.getByText("There's nothing here."))
    expect(screen.getByText(mockPostFrontmatter.title))

    mockVideos.forEach(mockVideo => {
        expect(screen.getByAltText(mockVideo.title))
    })
})
