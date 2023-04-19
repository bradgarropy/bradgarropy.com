import {mockRepositoryTopics} from "~/test-utils/mocks"
import {getTechnologies, technologies} from "~/utils/tech"

test("gets technologies", () => {
    const tech = getTechnologies(mockRepositoryTopics)
    expect(tech).toEqual(technologies)
})
