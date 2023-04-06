import Link from "@bradgarropy/next-link"
import type {FC} from "react"

import {createImageUrl} from "~/utils/cloudinary"

const Podcast: FC = () => {
    return (
        <div className="grid grid-cols-2 gap-8 max-[700px]:grid-cols-1">
            <Link
                to="https://open.spotify.com/show/3TAuVah0Q9BOV5PbwPDGfs"
                className="max-[700px]:w-3/4"
            >
                <img
                    src={createImageUrl("/pages/home/web-dev-weekly.jpg")}
                    alt="Web Dev Weekly"
                    className="box-border rounded border-3 border-black shadow-box transition duration-300 hover:shadow-none dark:border-white dark:shadow-box-white hover:dark:shadow-none"
                    width="500"
                    height="500"
                />
            </Link>

            <Link
                to="https://open.spotify.com/show/7Er1m8VEzRNu59ZhaS18WY"
                className="max-[700px]:w-3/4"
            >
                <img
                    src={createImageUrl("/pages/home/compressed-fm.jpg")}
                    alt="Compressed.fm"
                    className="box-border rounded border-3 border-black shadow-box transition duration-300 hover:shadow-none dark:border-white dark:shadow-box-white hover:dark:shadow-none"
                    width="500"
                    height="500"
                />
            </Link>
        </div>
    )
}

export default Podcast
