import {renderHook} from "@testing-library/react"
import {useMeta} from "hooks"
import {mockMeta} from "test-utils/mocks"
import {expect, test} from "vitest"

test("returns metadata", () => {
    const {result} = renderHook(() => useMeta())
    expect(result.current).toEqual(mockMeta)
})
