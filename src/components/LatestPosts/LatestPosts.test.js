import {render, screen} from "@testing-library/react"
import LatestPosts from "components/LatestPosts"
import {useLatestPosts} from "hooks"
import {mockPosts} from "test-utils/mocks"

jest.mock("hooks")
useLatestPosts.mockReturnValue(mockPosts)

test("shows latest posts", () => {
    render(<LatestPosts />)

    mockPosts.forEach(post => {
        expect(screen.getByText(post.frontmatter.title))
    })
})
