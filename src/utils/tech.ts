const technologies = [
    "gatsby",
    "javascript",
    "next",
    "node",
    "react",
    "svelte",
    "tailwind",
    "typescript",
]

const getTechnologies = (topics: string[]): string[] => {
    const tech: string[] = []

    topics.forEach(topic => {
        if (technologies.includes(topic)) {
            tech.push(topic)
        }
    })

    return tech
}

export {getTechnologies, technologies}
