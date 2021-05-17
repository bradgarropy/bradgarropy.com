import {graphql, useStaticQuery} from "gatsby"

const useProjects = () => {
    const query = graphql`
        {
            githubData {
                data {
                    user {
                        pinnedItems {
                            nodes {
                                url
                                name
                                description
                                stargazerCount
                                repositoryTopics {
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
        }
    `

    const data = useStaticQuery(query)
    const pinnedItems = data.githubData.data.user.pinnedItems.nodes

    const projects = pinnedItems.map(pinnedItem => {
        const tags = pinnedItem.repositoryTopics.nodes

        const project = {
            url: pinnedItem.url,
            name: pinnedItem.name,
            description: pinnedItem.description,
            stars: pinnedItem.stargazerCount,
            topics: tags.map(tag => tag.topic.name),
        }

        return project
    })

    return projects
}

export default useProjects
