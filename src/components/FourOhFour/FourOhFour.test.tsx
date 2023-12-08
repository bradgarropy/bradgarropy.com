import {render, screen} from "@testing-library/react"
import {expect, test} from "vitest"

import FourOhFour from "~/components/FourOhFour"
import {mockPostFrontmatter, mockVideos} from "~/test-utils/mocks"

test("shows 404", () => {
    render(<FourOhFour post={mockPostFrontmatter} videos={mockVideos} />)

    expect(screen.getByText("There's nothing here.")).toBeInTheDocument()
    expect(screen.getByText(mockPostFrontmatter.title)).toBeInTheDocument()

    mockVideos.forEach(mockVideo => {
        expect(screen.getByAltText(mockVideo.title)).toBeInTheDocument()
    })
})
