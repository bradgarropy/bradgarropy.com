import type {FC} from "react"

import Icon from "~/components/Icon"
import useApp from "~/hooks/useApp"

const Hamburger: FC = () => {
    const {setOpen} = useApp()

    const onClick = () => {
        setOpen(true)
    }

    return (
        <Icon
            name="menu"
            className="hidden cursor-pointer text-2xl max-[800px]:block"
            onClick={onClick}
        />
    )
}

export default Hamburger
