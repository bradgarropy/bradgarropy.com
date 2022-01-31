import {formatDate} from "utils/date"

test("formats date", () => {
    const formattedDate = formatDate("2022-01-01")
    expect(formattedDate).toEqual("January 1, 2022")
})
