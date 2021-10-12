import {renderHook} from "@testing-library/react-hooks"
import {useStaticQuery} from "gatsby"
import {useNow} from "hooks"
import {mockContact, mockContactQuery} from "test-utils/mocks"

useStaticQuery.mockReturnValue(mockContactQuery)

test("returns now", () => {
    const {result} = renderHook(() => useNow())
    expect(result.current).toEqual(mockContact.html)
})
