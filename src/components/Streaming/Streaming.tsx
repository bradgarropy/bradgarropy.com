import Link from "@bradgarropy/next-link"
import {FC} from "react"

const Streaming: FC = () => {
    return (
        <Link to="https://twitch.tv/bradgarropy">
            <span className="font-heading font-black tracking-[-0.075rem] text-lg animate-pulse">
                🎥 streaming
            </span>
        </Link>
    )
}

export default Streaming
