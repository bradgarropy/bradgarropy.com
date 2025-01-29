import {Link} from "@remix-run/react"
import type {FC} from "react"

const Streaming: FC = () => {
    return (
        <Link to="https://twitch.tv/bradgarropy">
            <span className="font-heading animate-pulse text-lg font-black tracking-[-0.075rem]">
                🎥 streaming
            </span>
        </Link>
    )
}

export default Streaming
