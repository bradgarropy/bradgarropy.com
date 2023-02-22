import {FC} from "react"
import {Topic} from "types/post"

type TopicMetaProps = {
    topic: Topic
}

const TopicMeta: FC<TopicMetaProps> = ({topic}) => {
    const {name, icon} = topic

    return (
        <h1 className="m-0 mb-14 text-center text-3xl">
            {icon} {name}
        </h1>
    )
}

export default TopicMeta
