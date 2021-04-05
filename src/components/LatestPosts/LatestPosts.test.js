import LatestPosts from "components/LatestPosts"
import {useLatestPosts} from "hooks"
import {mockPosts} from "test-utils/mocks"
import {render, screen} from "test-utils/render"

jest.mock("hooks")
useLatestPosts.mockReturnValue(mockPosts)

test("shows latest posts", () => {
    render(<LatestPosts />)

    mockPosts.forEach(post => {
        console.log(post)
        expect(screen.getByText(post.frontmatter.title))
    })
})
