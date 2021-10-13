import {renderHook} from "@testing-library/react-hooks"
import {useStaticQuery} from "gatsby"
import {useNow} from "hooks"
import {mockNow, mockNowQuery} from "test-utils/mocks"

const mockUseStaticQuery = useStaticQuery as jest.Mock
mockUseStaticQuery.mockReturnValue(mockNowQuery)

test("returns now", () => {
    const {result} = renderHook(() => useNow())
    expect(result.current).toEqual(mockNow)
})
