import {generateRobots} from "~/utils/robots"

export const loader = () => {
    const robots = generateRobots()
    return new Response(robots)
}
