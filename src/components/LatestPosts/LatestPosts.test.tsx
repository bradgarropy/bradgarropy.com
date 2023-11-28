import {render, screen} from "@testing-library/react"

import LatestPosts from "~/components/LatestPosts"
import {mockPostsFrontmatter} from "~/test-utils/mocks"

test("shows latest posts", () => {
    render(<LatestPosts latestPosts={mockPostsFrontmatter} />)

    mockPostsFrontmatter.forEach(post => {
        expect(screen.getByText(post.title)).toBeInTheDocument()
    })
})
