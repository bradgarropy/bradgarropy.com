import type {FC, HTMLAttributes} from "react"

import {
    BlueskyIcon,
    CloseIcon,
    DiscordIcon,
    FeedIcon,
    GatsbyIcon,
    GithubIcon,
    InstagramIcon,
    JavascriptIcon,
    LinkedinIcon,
    LinkIcon,
    MenuIcon,
    MoonIcon,
    NextIcon,
    NodeIcon,
    RaspberryPiIcon,
    ReactIcon,
    RemixIcon,
    SunIcon,
    SvelteIcon,
    TailwindIcon,
    TwitchIcon,
    TwitterIcon,
    TypescriptIcon,
    VercelIcon,
    XIcon,
    YoutubeIcon,
} from "~/components/Icons"

type IconProps = {
    name: string
} & HTMLAttributes<SVGElement>

const Icon: FC<IconProps> = ({name, ...props}) => {
    switch (name) {
        case "bluesky":
            return <BlueskyIcon {...props} />
        case "close":
            return <CloseIcon {...props} />
        case "discord":
            return <DiscordIcon {...props} />
        case "feed":
            return <FeedIcon {...props} />
        case "gatsby":
            return <GatsbyIcon {...props} />
        case "github":
            return <GithubIcon {...props} />
        case "instagram":
            return <InstagramIcon {...props} />
        case "javascript":
            return <JavascriptIcon {...props} />
        case "link":
            return <LinkIcon {...props} />
        case "linkedin":
            return <LinkedinIcon {...props} />
        case "menu":
            return <MenuIcon {...props} />
        case "moon":
            return <MoonIcon {...props} />
        case "next":
            return <NextIcon {...props} />
        case "node":
            return <NodeIcon {...props} />
        case "raspberry-pi":
            return <RaspberryPiIcon {...props} />
        case "react":
            return <ReactIcon {...props} />
        case "remix":
            return <RemixIcon {...props} />
        case "sun":
            return <SunIcon {...props} />
        case "svelte":
            return <SvelteIcon {...props} />
        case "twitch":
            return <TwitchIcon {...props} />
        case "twitter":
            return <TwitterIcon {...props} />
        case "typescript":
            return <TypescriptIcon {...props} />
        case "tailwind":
            return <TailwindIcon {...props} />
        case "vercel":
            return <VercelIcon {...props} />
        case "x":
            return <XIcon {...props} />
        case "youtube":
            return <YoutubeIcon {...props} />
        default:
            return null
    }
}

export default Icon
