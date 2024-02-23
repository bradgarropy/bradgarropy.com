import {redirect} from "@remix-run/node"

export const loader = () => {
    throw redirect(
        "https://youtube.com/playlist?list=PL6Mu1AMmTL-vlrGehLTnA_MCjI4Bjx92r",
    )
}
