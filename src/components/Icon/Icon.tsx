import {FC, HTMLAttributes} from "react"
import CloseIcon from "svg/close.svg?component"
import DiscordIcon from "svg/discord.svg?component"
import GatsbyIcon from "svg/gatsby.svg?component"
import GithubIcon from "svg/github.svg?component"
import InstagramIcon from "svg/instagram.svg?component"
import JavascriptIcon from "svg/javascript.svg?component"
import LinkIcon from "svg/link.svg?component"
import MenuIcon from "svg/menu.svg?component"
import NextIcon from "svg/next.svg?component"
import NodeIcon from "svg/node.svg?component"
import ReactIcon from "svg/reacticon.svg?component"
import SvelteIcon from "svg/svelte.svg?component"
import TailwindIcon from "svg/tailwind.svg?component"
import TwitchIcon from "svg/twitch.svg?component"
import TwitterIcon from "svg/twitter.svg?component"
import TypescriptIcon from "svg/typescript.svg?component"
import YouTubeIcon from "svg/youtube.svg?component"

type IconProps = {
    name: string
} & HTMLAttributes<SVGElement>

const Icon: FC<IconProps> = ({name, ...props}) => {
    switch (name) {
        case "close":
            return <CloseIcon aria-label={name} {...props} />
        case "discord":
            return <DiscordIcon aria-label={name} {...props} />
        case "gatsby":
            return <GatsbyIcon aria-label={name} {...props} />
        case "github":
            return <GithubIcon aria-label={name} {...props} />
        case "instagram":
            return <InstagramIcon aria-label={name} {...props} />
        case "javascript":
            return <JavascriptIcon aria-label={name} {...props} />
        case "link":
            return <LinkIcon aria-label={name} {...props} />
        case "menu":
            return <MenuIcon aria-label={name} {...props} />
        case "next":
            return <NextIcon aria-label={name} {...props} />
        case "node":
            return <NodeIcon aria-label={name} {...props} />
        case "react":
            return <ReactIcon aria-label={name} {...props} />
        case "svelte":
            return <SvelteIcon aria-label={name} {...props} />
        case "twitch":
            return <TwitchIcon aria-label={name} {...props} />
        case "twitter":
            return <TwitterIcon aria-label={name} {...props} />
        case "typescript":
            return <TypescriptIcon aria-label={name} {...props} />
        case "tailwind":
            return <TailwindIcon aria-label={name} {...props} />
        case "youtube":
            return <YouTubeIcon aria-label={name} {...props} />
        default:
            return null
    }
}

export default Icon
