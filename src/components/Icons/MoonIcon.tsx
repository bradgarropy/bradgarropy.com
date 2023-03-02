import type {FC} from "react"

const MoonIcon: FC = props => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-label="moon"
            viewBox="0 0 24 24"
            width="24"
            fill="none"
            stroke="currentColor"
            {...props}
        >
            <path
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
            />
        </svg>
    )
}

export default MoonIcon
