import Link from "@bradgarropy/next-link"
import {FC} from "react"
import {createImageUrl} from "utils/cloudinary"

import styles from "./Hero.module.css"

const Hero: FC = () => {
    return (
        <div className="grid grid-cols-hero items-start self-center justify-self-center">
            <Link
                to="https://instagram.com/bradgarropy"
                className={styles.heroLink}
            >
                <img
                    src={createImageUrl("/pages/home/profile.jpg")}
                    alt="bg"
                    className={styles.heroImage}
                    width="460"
                    height="460"
                />
            </Link>

            <div>
                <h1 className="m-0 text-5xl font-black leading-normal -tracking-[0.2rem]">
                    i&apos;m brad garropy
                </h1>

                <div className="grid grid-cols-[repeat(2,auto)] justify-start justify-items-center gap-x-3 pl-10 leading-normal">
                    <h2 className="m-0 justify-self-start font-text text-2xl font-medium">
                        lead frontend developer
                    </h2>
                    <span className="m-0 text-2xl font-medium leading-normal">
                        👨🏼‍💻
                    </span>

                    <h2 className="m-0 justify-self-start font-text text-2xl font-medium">
                        growing content creator
                    </h2>
                    <span className="m-0 text-2xl font-medium leading-normal">
                        🎥
                    </span>

                    <h2 className="m-0 justify-self-start font-text text-2xl font-medium">
                        side project connoisseur
                    </h2>
                    <span className="m-0 text-2xl font-medium leading-normal">
                        🥃
                    </span>

                    <h2 className="m-0 justify-self-start font-text text-2xl font-medium">
                        open source maintainer
                    </h2>
                    <span className="m-0 text-2xl font-medium leading-normal">
                        ✨
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Hero
