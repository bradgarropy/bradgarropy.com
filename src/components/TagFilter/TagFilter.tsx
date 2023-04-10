import type {ChangeEventHandler, FC} from "react"

import type {Tag} from "~/types/post"

type TagFilterProps = {
    tags: Tag[]
    onFilter: (tag: Tag) => void
}

const TagFilter: FC<TagFilterProps> = ({tags, onFilter}) => {
    const onChange: ChangeEventHandler<HTMLSelectElement> = event => {
        onFilter(event.target.value)
    }

    return (
        <div className="flex flex-col">
            <label
                htmlFor="tag"
                className="font-heading text-xl font-extrabold"
            >
                tag
            </label>

            <select
                id="tag"
                className="rounded border-3 border-black px-8 py-4 text-base shadow-box placeholder:text-gray-400 focus:border-purple-400 focus:outline-none dark:text-black dark:shadow-box-white"
                onChange={onChange}
            >
                <option value="">all</option>

                {tags.map(tag => {
                    return (
                        <option key={tag} value={tag}>
                            {tag}
                        </option>
                    )
                })}
            </select>
        </div>
    )
}

export default TagFilter
