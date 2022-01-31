import {format, parseISO} from "date-fns"

const formatDate = (date: string): string => {
    const isoDate = parseISO(date)
    const formattedDate = format(isoDate, "MMMM d, y")

    return formattedDate
}

export {formatDate}
