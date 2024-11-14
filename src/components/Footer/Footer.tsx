import type {FC} from "react"

import SocialLink from "~/components/SocialLink"

const Footer: FC = () => {
    return (
        <footer className="flex flex-wrap content-center justify-center gap-5 px-5 pb-20 pt-28">
            <SocialLink platform="twitch" />
            <SocialLink platform="github" />
            <SocialLink platform="bluesky" />
            <SocialLink platform="youtube" />
            <SocialLink platform="x" />
            <SocialLink platform="instagram" />
            <SocialLink platform="discord" />
            <SocialLink platform="feed" />
        </footer>
    )
}

export default Footer
