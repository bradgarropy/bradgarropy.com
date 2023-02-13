import Link from "@bradgarropy/next-link"
import {FC} from "react"
import {createImageUrl} from "utils/cloudinary"

const Podcast: FC = () => {
    return (
        <div className="grid grid-cols-[1fr_auto] gap-8 justify-start items-center max-[700px]:grid-cols-1">
            <Link
                to="https://open.spotify.com/show/3TAuVah0Q9BOV5PbwPDGfs"
                className="max-[700px]:w-3/4"
            >
                <img
                    src={createImageUrl("/pages/home/web-dev-weekly.jpg")}
                    alt="Web Dev Weekly"
                    className="transition duration-300 box-border border-[3px] border-black shadow-box hover:shadow-none rounded-[0.3rem]"
                    width="500"
                    height="500"
                />
            </Link>

            <div className="grid justify-items-start text-black font-text">
                <span>a weekly podcast about web development hosted by</span>

                <div className="grid gap-x-3 grid-flow-col items-center text-2xl font-heading font-black tracking-[-0.075rem] leading-[1.6] max-[700px]:text-[1.4rem]">
                    <Link
                        className="transition-[text-shadow] duration-300 text-black hover:text-black hover:[text-shadow:_2px_2px_var(--purple)]"
                        to="https://twitter.com/bradgarropy"
                    >
                        brad garropy
                    </Link>

                    <span>/</span>

                    <Link
                        className="transition-[text-shadow] duration-300 text-black hover:text-black hover:[text-shadow:_2px_2px_var(--purple)]"
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
