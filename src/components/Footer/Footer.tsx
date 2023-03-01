import SocialLink from "components/SocialLink"
import type {FC} from "react"

const Footer: FC = () => {
    return (
        <footer className="grid grid-flow-col content-center justify-center gap-5 pt-12 pb-20">
            <SocialLink platform="twitch" />
            <SocialLink platform="github" />
            <SocialLink platform="youtube" />
            <SocialLink platform="twitter" />
            <SocialLink platform="instagram" />
            <SocialLink platform="discord" />
        </footer>
    )
}

export default Footer
