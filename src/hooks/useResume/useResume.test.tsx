import {renderHook} from "@testing-library/react-hooks"
import {useStaticQuery} from "gatsby"
import {useResume} from "hooks"
import {mockResume, mockResumeQuery} from "test-utils/mocks"

const mockUseStaticQuery = useStaticQuery as jest.Mock
mockUseStaticQuery.mockReturnValue(mockResumeQuery)

test("returns resume", () => {
    const {result} = renderHook(() => useResume())
    expect(result.current).toEqual(mockResume.html)
})
