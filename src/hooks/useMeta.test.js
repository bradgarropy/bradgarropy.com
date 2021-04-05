import {renderHook} from "@testing-library/react-hooks"
import {useStaticQuery} from "gatsby"
import {useMeta} from "hooks"
import {mockMeta, mockMetaQuery} from "test-utils/mocks"

useStaticQuery.mockReturnValue(mockMetaQuery)

test("returns metadata", () => {
    const {result} = renderHook(() => useMeta())
    expect(result.current).toEqual(mockMeta)
})
