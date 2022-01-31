import Captivate from "@bradgarropy/captivate-sdk"
import {Podcast} from "types/podcast"

const SHOW_ID = "bae7a2f1-8cf5-46aa-b566-243bfbd837f7"

const captivate = new Captivate(
    process.env.CAPTIVATE_USER_ID,
    process.env.CAPTIVATE_API_KEY,
)

const getPodcast = async (): Promise<Podcast> => {
    const show = await captivate.shows.getShow(SHOW_ID)

    const podcast = {
        title: show.title,
        link: show.link,
        image: show.artwork,
        episodes: [],
    }

    return podcast
}

export {getPodcast}
