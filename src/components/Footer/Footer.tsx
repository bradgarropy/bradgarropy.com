import type {FC} from "react"

import SocialLink from "~/components/SocialLink"

const Footer: FC = () => {
    return (
        <footer className="flex flex-wrap content-center justify-center gap-5 px-5 pt-28 pb-20">
            <SocialLink platform="youtube" />
            <SocialLink platform="discord" />
            <SocialLink platform="bluesky" />
            <SocialLink platform="linkedin" />
            <SocialLink platform="github" />
            <SocialLink platform="instagram" />
            <SocialLink platform="x" />
            <SocialLink platform="twitch" />
            <SocialLink platform="feed" />
        </footer>
    )
}

export default Footer
