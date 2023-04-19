import {graphql} from "@octokit/graphql"

import type {Project} from "~/types/project"

type FeaturedProjectsResponse = {
    user: {
        pinnedItems: {
            nodes: PinnedItem[]
        }
    }
}

type PinnedItem = {
    url: string
    name: string
    description: string
    stargazerCount: number
    repositoryTopics: {
        nodes: RepositoryTopic[]
    }
}

type RepositoryTopic = {
    topic: {
        name: string
    }
}

const getFeaturedProjects = async (): Promise<Project[]> => {
    const octokit = graphql.defaults({
        headers: {
            authorization: `Token ${process.env.GITHUB_TOKEN}`,
        },
    })

    const {user} = await octokit<FeaturedProjectsResponse>(
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
    )

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
