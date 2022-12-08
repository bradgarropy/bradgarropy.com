import SocialLink from "components/SocialLink"
import {FC} from "react"
import {createImageUrl} from "utils/cloudinary"

const Connect: FC = () => {
    return (
        <div className="grid gap-8 text-xl text-center">
            <img
                src={createImageUrl("/pages/home/profile.jpg")}
                alt="bg"
                className="rounded-full border-8 border-solid border-black w-4/5"
                width="460"
                height="460"
            />

            <div>
                <p className="m-0">Thanks for chatting with me!</p>
                <p className="m-0">Let&apos;s connect on these platforms.</p>
            </div>

            <div className="grid grid-flow-col justify-center content-center gap-x-5">
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
