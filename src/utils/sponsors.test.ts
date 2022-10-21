import {graphql} from "@octokit/graphql"
import {mockGitHubSponsorsResponse, mockSponsors} from "test-utils/mocks"
import {getSponsors} from "utils/sponsors"
import {expect, Mock, test, vi} from "vitest"

vi.mock("@octokit/graphql")

const mockOctokit = graphql.defaults as Mock
mockOctokit.mockReturnValue(() => mockGitHubSponsorsResponse)

test("gets sponsors", async () => {
    const sponsors = await getSponsors()
    expect(sponsors).toEqual(mockSponsors)
})
