import {format, parse} from "date-fns"

const formatDate = string => {
    const date = parse(string, "yyyy-MM-dd", new Date())
    const formattedDate = format(date, "MMMM d, yyyy")

    return formattedDate
}

export {formatDate}
