import type {FC} from "react"

const ReactIcon: FC = props => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-label="react"
            viewBox="-11.5 -10.232 23 20.463"
            height="24"
            {...props}
        >
            <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
            <g fill="none" stroke="#61dafb" strokeWidth="1">
                <ellipse rx="11" ry="4.2" />
                <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                <ellipse rx="11" ry="4.2" transform="rotate(120)" />
            </g>
        </svg>
    )
}

export default ReactIcon
