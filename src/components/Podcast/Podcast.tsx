import Link from "@bradgarropy/next-link"
import type {FC} from "react"

import {createImageUrl} from "~/utils/cloudinary"

const Podcast: FC = () => {
    return (
        <div className="grid grid-cols-[1fr_auto] items-center justify-start gap-8 max-[700px]:grid-cols-1">
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

            <div className="grid justify-items-start">
                <span>a weekly podcast about web development hosted by</span>

                <div className="grid grid-flow-col items-center gap-x-3 font-heading text-2xl font-black leading-[1.6] tracking-[-0.075rem] max-[700px]:text-[1.4rem]">
                    <Link
                        className="hover:text-shadow-2 transition-all duration-300"
                        to="https://twitter.com/bradgarropy"
                    >
                        brad garropy
                    </Link>

                    <span>/</span>

                    <Link
                        className="hover:text-shadow-2 transition-all duration-300"
                        to="https://twitter.com/RGottleber"
                    >
                        richard gottleber
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Podcast
