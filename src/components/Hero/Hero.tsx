import Link from "@bradgarropy/next-link"
import {FC} from "react"
import {createImageUrl} from "utils/cloudinary"

const Hero: FC = () => {
    return (
        <div className="grid grid-cols-hero items-start self-center justify-self-center max-[700px]:grid-cols-1 text-black dark:text-white transition duration-300">
            <Link
                to="https://instagram.com/bradgarropy"
                className="max-[700px]:m-auto max-[700px]:w-4/5"
            >
                <img
                    src={createImageUrl("/pages/home/profile.jpg")}
                    alt="bg"
                    className="rounded-full border-7 border-black dark:border-white transform duration-300 hover:-rotate-2 hover:border-purple-400"
                    width="460"
                    height="460"
                />
            </Link>

            <div>
                <h1 className="m-0 text-5xl font-black leading-normal -tracking-[0.2rem] font-heading">
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
