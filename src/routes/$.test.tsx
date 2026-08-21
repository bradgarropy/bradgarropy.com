import {expect, test, vi} from "vitest"

import {loader} from "~/routes/$"
import {mockPostFrontmatter, mockVideos} from "~/test-utils/mocks"
import * as posts from "~/utils/posts"
import * as videos from "~/utils/videos"

const getLatestPostSpy = vi.spyOn(posts, "getLatestPost")
const getLatestVideosSpy = vi.spyOn(videos, "getLatestVideos")

test("returns not found response", async () => {
    getLatestPostSpy.mockReturnValue(mockPostFrontmatter)
    getLatestVideosSpy.mockResolvedValue(mockVideos)

    const response = await loader()

    expect(response.init?.status).toEqual(404)

    expect(response.data).toEqual({
        latestPost: mockPostFrontmatter,
        latestVideos: mockVideos,
    })
})
