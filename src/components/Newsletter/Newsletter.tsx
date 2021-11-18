import {FC} from "react"
import * as ButtonStyles from "styles/Button.module.css"
import * as InputStyles from "styles/Input.module.css"

import * as styles from "./Newsletter.module.css"

const Newsletter: FC = () => {
    return (
        <div>
            <p className={styles.description}>
                💻 side projects | 📰 web dev news | ⚡ tech opinions
            </p>

            <form
                className={styles.newsletter}
                action="https://www.getrevue.co/profile/bradgarropy/add_subscriber"
                method="post"
                name="revue-form"
                target="_blank"
            >
                <input
                    className={InputStyles.input}
                    placeholder="email@example.com"
                    type="email"
                    name="member[email]"
                />

                <button className={ButtonStyles.button} type="submit">
                    📧 subscribe
                </button>
            </form>
        </div>
    )
}

export default Newsletter
