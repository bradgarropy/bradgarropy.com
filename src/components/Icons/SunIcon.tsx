import type {FC} from "react"

const SunIcon: FC = props => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-label="sun"
            viewBox="0 0 24 24"
            width="24"
            fill="none"
            stroke="currentColor"
            {...props}
        >
            <path
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
            />
        </svg>
    )
}

export default SunIcon
