import {renderHook} from "@testing-library/react-hooks"
import {useStaticQuery} from "gatsby"
import {useHireMe} from "hooks"
import {mockHireMe, mockHireMeQuery} from "test-utils/mocks"

const mockUseStaticQuery = useStaticQuery as jest.Mock
mockUseStaticQuery.mockReturnValue(mockHireMeQuery)

test("returns hire me", () => {
    const {result} = renderHook(() => useHireMe())
    expect(result.current).toEqual(mockHireMe.html)
})
