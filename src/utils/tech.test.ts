import {mockRepositoryTopics} from "test-utils/mocks"
import {getTechnologies, technologies} from "utils/tech"
import {expect, test} from "vitest"

test.concurrent("gets technologies", () => {
    const tech = getTechnologies(mockRepositoryTopics)
    expect(tech).toEqual(technologies)
})
