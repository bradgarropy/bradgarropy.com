import {writeFileSync} from "fs"
import {mockPostsFrontmatter} from "test-utils/mocks"
import {getAllPosts} from "utils/posts"
import {generateRss} from "utils/rss"

jest.mock("fs")
jest.mock("utils/posts")

jest.mock("gatsby-remark-vscode", () => {
    return {
        remarkPlugin: tree => tree,
    }
})

const mockWriteFileSync = writeFileSync as jest.Mock
const mockGetAllPosts = getAllPosts as jest.Mock

mockGetAllPosts.mockReturnValue(mockPostsFrontmatter)

describe("generates feeds", () => {
    beforeEach(() => {
        generateRss()
    })

    test("generates rss feed", () => {
        expect(mockWriteFileSync).toHaveBeenCalledTimes(3)
    })

    test("generates atom feed", () => {
        expect(mockWriteFileSync).toHaveBeenCalledTimes(3)
    })

    test("generates json feed", () => {
        expect(mockWriteFileSync).toHaveBeenCalledTimes(3)
    })
})
