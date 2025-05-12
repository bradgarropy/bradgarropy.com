import type {FC} from "react"
import {Link} from "react-router"

import {createImageUrl} from "~/utils/cloudinary"

const Shirts: FC = () => {
    return (
        <div className="grid grid-cols-2 gap-y-8 max-[700px]:grid-cols-1">
            <Link to="https://cottonbureau.com/p/WC7E8J/shirt/curly-bois-night-owl">
                <img
                    src={createImageUrl("/pages/home/night-owl.png")}
                    alt="night owl"
                    width="400"
                    height="474"
                />
            </Link>

            <Link to="https://cottonbureau.com/p/ZF5QAG/shirt/curly-bois-bg-codes">
                <img
                    src={createImageUrl("/pages/home/bg-codes.png")}
                    alt="bg codes"
                    width="400"
                    height="474"
                />
            </Link>

            <Link to="https://cottonbureau.com/p/QAJJZM/shirt/curly-bois-cobalt2">
                <img
                    src={createImageUrl("/pages/home/cobalt2.png")}
                    className="max-[700px]:hidden"
                    alt="cobalt2"
                    width="400"
                    height="473"
                />
            </Link>

            <Link to="https://cottonbureau.com/p/ES9WTJ/shirt/curly-bois-monokai">
                <img
                    src={createImageUrl("/pages/home/monokai.png")}
                    className="max-[700px]:hidden"
                    alt="monokai"
                    width="400"
                    height="473"
                />
            </Link>
        </div>
    )
}

export default Shirts
