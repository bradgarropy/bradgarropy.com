import {renderHook} from "@testing-library/react-hooks"
import {useStaticQuery} from "gatsby"
import {useProjects} from "hooks"
import {mockProjects, mockProjectsQuery} from "test-utils/mocks"

const mockUseStaticQuery = useStaticQuery as jest.Mock
mockUseStaticQuery.mockReturnValue(mockProjectsQuery)

test("returns projects", () => {
    const {result} = renderHook(() => useProjects())
    expect(result.current).toEqual(mockProjects)
})
