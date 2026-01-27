import {useRouteLoaderData} from "@remix-run/react"
import type {FC} from "react"
import type {loader} from "src/root"

import SocialLink from "~/components/SocialLink"

const Footer: FC = () => {
    const root = useRouteLoaderData<typeof loader>("root")

    if (!root) {
        return null
    }

    const hostTitle = root.host === "vercel" ? "Vercel" : "Raspberry Pi"

    return (
        <footer className="px-5 pt-28 pb-20">
            <div className="mb-4 flex flex-wrap content-center justify-center gap-5">
                <SocialLink platform="youtube" />
                <SocialLink platform="discord" />
                <SocialLink platform="bluesky" />
                <SocialLink platform="linkedin" />
                <SocialLink platform="github" />
                <SocialLink platform="instagram" />
                <SocialLink platform="x" />
                <SocialLink platform="twitch" />
                <SocialLink platform="feed" />
            </div>

            <p className="text-center">Hosted on {hostTitle}</p>
        </footer>
    )
}

export default Footer
