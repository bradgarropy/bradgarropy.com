import {expect, test} from "vitest"

import {generateRobots} from "~/utils/robots"

test("generates robots", () => {
    const robots = generateRobots()
    expect(robots).toContain("User-agent: *")
    expect(robots).toContain("Allow: /")
})
