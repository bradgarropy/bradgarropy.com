import {renderHook} from "@testing-library/react"
import {expect, test} from "vitest"

import useMeta from "~/hooks/useMeta"
import {mockMeta} from "~/test-utils/mocks"

test("returns metadata", () => {
    const {result} = renderHook(() => useMeta())
    expect(result.current).toEqual(mockMeta)
})
