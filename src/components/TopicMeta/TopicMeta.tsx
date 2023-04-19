import type {FC} from "react"

import type {Topic} from "~/types/post"

type TopicMetaProps = {
    topic: Topic
}

const TopicMeta: FC<TopicMetaProps> = ({topic}) => {
    const {name, icon} = topic

    return (
        <h1 className="mb-16 text-center font-heading text-4xl font-semibold">
            {icon} {name}
        </h1>
    )
}

export default TopicMeta
