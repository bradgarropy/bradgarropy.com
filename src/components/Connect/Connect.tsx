import SocialLink from "components/SocialLink"
import type {FC} from "react"
import {createImageUrl} from "utils/cloudinary"

const Connect: FC = () => {
    return (
        <div className="grid justify-items-center gap-8 text-center text-xl">
            <img
                src={createImageUrl("/pages/home/profile.jpg")}
                alt="bg"
                className="w-[80vw] max-w-[14rem] rounded-full border-7 border-solid border-black"
                width="460"
                height="460"
            />

            <div>
                <p className="m-0">Thanks for chatting with me!</p>
                <p className="m-0">Let&apos;s connect on these platforms.</p>
            </div>

            <div className="grid grid-flow-col content-center justify-center gap-x-5">
                <SocialLink platform="twitch" />
                <SocialLink platform="github" />
                <SocialLink platform="youtube" />
                <SocialLink platform="twitter" />
                <SocialLink platform="instagram" />
                <SocialLink platform="discord" />
            </div>
        </div>
    )
}

export default Connect
