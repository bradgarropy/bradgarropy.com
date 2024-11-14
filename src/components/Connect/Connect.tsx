import {Link} from "@remix-run/react"
import type {FC} from "react"

import SocialLink from "~/components/SocialLink"
import {createImageUrl} from "~/utils/cloudinary"

const Connect: FC = () => {
    return (
        <div className="grid justify-items-center gap-8 text-center text-xl">
            <Link to="/">
                <img
                    src={createImageUrl("/pages/home/profile.jpg")}
                    alt="bg"
                    className="w-[80vw] max-w-[14rem] transform rounded-full border-7 border-solid border-black duration-300 hover:-rotate-2 hover:border-purple-400 dark:border-white dark:hover:border-purple-400"
                    width="460"
                    height="460"
                />
            </Link>

            <div>
                <p className="m-0">Thanks for chatting with me!</p>
                <p className="m-0">Let&apos;s connect on these platforms.</p>
            </div>

            <div className="grid grid-flow-col content-center justify-center gap-x-5">
                <SocialLink platform="twitch" />
                <SocialLink platform="github" />
                <SocialLink platform="bluesky" />
                <SocialLink platform="youtube" />
                <SocialLink platform="x" />
                <SocialLink platform="instagram" />
                <SocialLink platform="discord" />
                <SocialLink platform="feed" />
            </div>
        </div>
    )
}

export default Connect
