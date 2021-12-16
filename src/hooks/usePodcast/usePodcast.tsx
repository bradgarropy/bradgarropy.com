import {Podcast} from "types/podcast"

const usePodcast = (): Podcast => {
    const podcast = {
        title: "title",
        link: "link",
        image: "image",
        episodes: [],
    }

    return podcast
}

export default usePodcast
