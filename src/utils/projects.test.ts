import {graphql} from "@octokit/graphql"
import type {Mock} from "vitest"
import {expect, test, vi} from "vitest"

import {mockGitHubPinnedResponse, mockProjects} from "~/test-utils/mocks"
import {getFeaturedProjects} from "~/utils/projects"

vi.mock("@octokit/graphql")

const mockOctokit = graphql.defaults as Mock
mockOctokit.mockReturnValue(() => mockGitHubPinnedResponse)

test("gets featured projects", async () => {
    const projects = await getFeaturedProjects()
    expect(projects).toEqual(mockProjects)
})
