import type {FC} from "react"

import SocialLink from "~/components/SocialLink"

const Footer: FC = () => {
    return (
        <footer className="grid grid-flow-col content-center justify-center gap-5 pb-20 pt-28">
            <SocialLink platform="twitch" />
            <SocialLink platform="github" />
            <SocialLink platform="youtube" />
            <SocialLink platform="x" />
            <SocialLink platform="instagram" />
            <SocialLink platform="discord" />
        </footer>
    )
}

export default Footer
