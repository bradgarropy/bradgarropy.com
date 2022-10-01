import {graphql} from "@octokit/graphql"
import {Project} from "types/project"

const getFeaturedProjects = async (): Promise<Project[]> => {
    const octokit = graphql.defaults({
        headers: {
            authorization: `Token ${process.env.GITHUB_TOKEN}`,
        },
    })

    const {user} = (await octokit(
        `
            {
                user(login: "bradgarropy") {
                    pinnedItems(types: REPOSITORY, first: 6) {
                        nodes {
                            ... on Repository {
                                url
                                name
                                description
                                stargazerCount
                                repositoryTopics(first: 20) {
                                    nodes {
                                        topic {
                                            name
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        `,
    )) as any

    const projects = user.pinnedItems.nodes.map(node => {
        const project: Project = {
            name: node.name,
            description: node.description,
            url: node.url,
            stars: node.stargazerCount,
            topics: node.repositoryTopics.nodes.map(node => node.topic.name),
        }

        return project
    })

    return projects
}

export {getFeaturedProjects}
