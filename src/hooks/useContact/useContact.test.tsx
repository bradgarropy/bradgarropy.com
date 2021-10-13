import {renderHook} from "@testing-library/react-hooks"
import {useStaticQuery} from "gatsby"
import {useContact} from "hooks"
import {mockContact, mockContactQuery} from "test-utils/mocks"

const mockUseStaticQuery = useStaticQuery as jest.Mock
mockUseStaticQuery.mockReturnValue(mockContactQuery)

test("returns contact", () => {
    const {result} = renderHook(() => useContact())
    expect(result.current).toEqual(mockContact.html)
})
