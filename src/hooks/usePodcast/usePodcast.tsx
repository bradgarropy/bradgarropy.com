import {graphql, useStaticQuery} from "gatsby"
import {Podcast} from "types/podcast"

const usePodcast = (): Podcast => {
    const query = graphql`
        {
            podcast: anchorPodcast(title: {eq: "Web Dev Weekly"}) {
                title
                link
                image {
                    url
                }
                items {
                    item {
                        title
                        link
                        isoDate
                    }
                }
            }
        }
    `

    const data = useStaticQuery(query)

    const podcast = {
        title: data.podcast.title,
        link: data.podcast.link,
        image: data.podcast.image.url,
        episodes: data.podcast.items.map(episode => ({
            title: episode.item.title,
            link: episode.item.link,
            date: episode.item.isoDate,
        })),
    }

    return podcast
}

export default usePodcast
