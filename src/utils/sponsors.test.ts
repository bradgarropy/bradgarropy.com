import {graphql} from "@octokit/graphql"
import {mockGitHubResponse, mockSponsors} from "test-utils/mocks"
import {getSponsors} from "utils/sponsors"

jest.mock("@octokit/graphql")

const mockOctokit = graphql.defaults as jest.Mock
mockOctokit.mockReturnValue(() => mockGitHubResponse)

test("gets sponsors", async () => {
    const sponsors = await getSponsors()
    expect(sponsors).toEqual(mockSponsors)
})
