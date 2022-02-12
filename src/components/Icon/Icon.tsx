import {FC, HTMLAttributes} from "react"
import CloseIcon from "svg/close.svg"
import DiscordIcon from "svg/discord.svg"
import GatsbyIcon from "svg/gatsby.svg"
import GithubIcon from "svg/github.svg"
import InstagramIcon from "svg/instagram.svg"
import JavascriptIcon from "svg/javascript.svg"
import LinkIcon from "svg/link.svg"
import MenuIcon from "svg/menu.svg"
import NextIcon from "svg/next.svg"
import NodeIcon from "svg/node.svg"
import ReactIcon from "svg/reacticon.svg"
import SvelteIcon from "svg/svelte.svg"
import TailwindIcon from "svg/tailwind.svg"
import TwitchIcon from "svg/twitch.svg"
import TwitterIcon from "svg/twitter.svg"
import TypescriptIcon from "svg/typescript.svg"
import YouTubeIcon from "svg/youtube.svg"

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
