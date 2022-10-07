import Link from "@bradgarropy/next-link"
import {FC} from "react"

import styles from "./Hero.module.css"

const Hero: FC = () => {
    return (
        <div className={styles.hero}>
            <Link
                to="https://instagram.com/bradgarropy"
                className={styles.heroLink}
            >
                <img
                    src="/profile.jpg"
                    alt="bg"
                    className={styles.heroImage}
                    width="460"
                    height="460"
                />
            </Link>

            <div>
                <h1 className={styles.headline}>i&apos;m brad garropy</h1>

                <div className={styles.description}>
                    <h2>lead frontend developer</h2>
                    <span>👨🏼‍💻</span>

                    <h2>growing content creator</h2>
                    <span>🎥</span>

                    <h2>side project connoisseur</h2>
                    <span>🥃</span>

                    <h2>open source maintainer</h2>
                    <span>✨</span>
                </div>
            </div>
        </div>
    )
}

export default Hero
