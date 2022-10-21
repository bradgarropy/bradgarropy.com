import {graphql} from "@octokit/graphql"
import {mockGitHubPinnedResponse, mockProjects} from "test-utils/mocks"
import {getFeaturedProjects} from "utils/projects"
import {expect, Mock, test, vi} from "vitest"

vi.mock("@octokit/graphql")

const mockOctokit = graphql.defaults as Mock
mockOctokit.mockReturnValue(() => mockGitHubPinnedResponse)

test.concurrent("gets featured projects", async () => {
    const projects = await getFeaturedProjects()
    expect(projects).toEqual(mockProjects)
})
