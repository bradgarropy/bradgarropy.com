import Link from "@bradgarropy/gatsby-link"
import {StaticImage} from "gatsby-plugin-image"
import {FC} from "react"

import * as styles from "./Hero.module.css"

const Hero: FC = () => {
    return (
        <div className={styles.hero}>
            <Link to="https://instagram.com/bradgarropy">
                <StaticImage
                    src="../../../static/profile.jpg"
                    alt="bg"
                    placeholder="blurred"
                    layout="fullWidth"
                    className={styles.heroImageContainer}
                    imgClassName={styles.heroImage}
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
