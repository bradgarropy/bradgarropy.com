import React from "react"
import {Link} from "gatsby"

const HireMe = () => {
    return (
        <div>
            <h1>
                <span role="img" aria-label="let's work together">
                    🤝
                </span>{" "}
                let&apos;s work together
            </h1>

            <p>
                I&apos;m always open to discussing new opportunities for full
                time work or freelance clients.
                <br />
                So please feel free to <Link to="/contact">contact</Link> me.
            </p>
            <p>
                But right now I{" "}
                <a
                    href="https://twitter.com/bradgarropy/status/1160048090751148034"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    really
                </a>{" "}
                <a
                    href="https://www.instagram.com/stories/highlights/18018079972169140"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    enjoy
                </a>{" "}
                my job at{" "}
                <a
                    href="https://www.adobe.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Adobe
                </a>
                !
            </p>
        </div>
    )
}

export default HireMe
