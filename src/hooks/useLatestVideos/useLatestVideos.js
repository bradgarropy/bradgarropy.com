import {graphql, useStaticQuery} from "gatsby"
import {getImage} from "gatsby-plugin-image"

const useLatestVideos = () => {
    const query = graphql`
        {
            videos: allYoutubeVideo(
                limit: 2
                sort: {fields: publishedAt, order: DESC}
            ) {
                nodes {
                    title
                    videoId
                    localThumbnail {
                        childImageSharp {
                            gatsbyImageData(
                                width: 400
                                placeholder: BLURRED
                                formats: [AUTO, WEBP, AVIF]
                                quality: 100
                            )
                        }
                    }
                }
            }
        }
    `

    const data = useStaticQuery(query)

    const videos = data.videos.nodes.map(node => {
        return {
            id: node.videoId,
            title: node.title,
            thumbnail: getImage(node.localThumbnail),
        }
    })

    return videos
}

export default useLatestVideos
