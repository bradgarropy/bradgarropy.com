import Link from "@bradgarropy/next-link"
import {FC} from "react"
import {createImageUrl} from "utils/cloudinary"

import styles from "./Hero.module.css"

const Hero: FC = () => {
    return (
        <div className="self-center items-start justify-self-center grid grid-cols-hero">
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
                <h1 className="m-0 -tracking-[0.2rem] font-black text-5xl leading-normal">
                    i&apos;m brad garropy
                </h1>

                <div className="grid grid-cols-[repeat(2,auto)] justify-start justify-items-center gap-x-3 pl-10 leading-normal">
                    <h2 className="text-2xl m-0 font-medium justify-self-start font-text">
                        lead frontend developer
                    </h2>
                    <span className="text-2xl m-0 font-medium leading-normal">
                        👨🏼‍💻
                    </span>

                    <h2 className="text-2xl m-0 font-medium justify-self-start font-text">
                        growing content creator
                    </h2>
                    <span className="text-2xl m-0 font-medium leading-normal">
                        🎥
                    </span>

                    <h2 className="text-2xl m-0 font-medium justify-self-start font-text">
                        side project connoisseur
                    </h2>
                    <span className="text-2xl m-0 font-medium leading-normal">
                        🥃
                    </span>

                    <h2 className="text-2xl m-0 font-medium justify-self-start font-text">
                        open source maintainer
                    </h2>
                    <span className="text-2xl m-0 font-medium leading-normal">
                        ✨
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Hero
