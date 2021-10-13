import {renderHook} from "@testing-library/react-hooks"
import {useStaticQuery} from "gatsby"
import {useSponsors} from "hooks"
import {mockSponsors, mockSponsorsQuery} from "test-utils/mocks"

const mockUseStaticQuery = useStaticQuery as jest.Mock
mockUseStaticQuery.mockReturnValue(mockSponsorsQuery)

test("returns sponsors", () => {
    const {result} = renderHook(() => useSponsors())
    expect(result.current).toEqual(mockSponsors)
})
