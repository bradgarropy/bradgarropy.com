import {graphql} from "@octokit/graphql"
import type {Mock} from "vitest"
import {expect, test, vi} from "vitest"

import {mockGitHubSponsorsResponse, mockSponsors} from "~/test-utils/mocks"
import {getSponsors} from "~/utils/sponsors"

vi.mock("@octokit/graphql")

const mockOctokit = graphql.defaults as Mock
mockOctokit.mockReturnValue(() => mockGitHubSponsorsResponse)

test("gets sponsors", async () => {
    const sponsors = await getSponsors()
    expect(sponsors).toEqual(mockSponsors)
})
