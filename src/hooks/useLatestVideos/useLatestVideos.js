import {graphql, useStaticQuery} from "gatsby"

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
    const videos = data.videos.nodes

    return videos
}

export default useLatestVideos
