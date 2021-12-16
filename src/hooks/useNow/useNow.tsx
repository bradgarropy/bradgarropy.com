import {Now} from "types/now"

const useNow = (): Now => {
    const now: Now = {
        html: "<p>now</p>",
        frontmatter: {
            date: "2021-12-15",
        },
        next: "2021-12-16",
        previous: "2021-12-14",
    }

    return now
}

export default useNow
