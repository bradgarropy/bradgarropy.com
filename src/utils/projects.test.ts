import {graphql} from "@octokit/graphql"

import {mockGitHubPinnedResponse, mockProjects} from "~/test-utils/mocks"
import {getFeaturedProjects} from "~/utils/projects"

jest.mock("@octokit/graphql")

const mockOctokit = graphql.defaults as jest.Mock
mockOctokit.mockReturnValue(() => mockGitHubPinnedResponse)

test("gets featured projects", async () => {
    const projects = await getFeaturedProjects()
    expect(projects).toEqual(mockProjects)
})
