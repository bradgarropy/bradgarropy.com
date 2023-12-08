import {renderHook} from "@testing-library/react"
import type {FC, ReactNode} from "react"
import {expect, test} from "vitest"

import type {AppContextType} from "~/context/App"
import {AppProvider} from "~/context/App"
import useApp from "~/hooks/useApp"
import {mockAppCtx} from "~/test-utils/mocks"

const mockAppContext: AppContextType = {
    ...mockAppCtx,
    setOpen: expect.any(Function),
}

type WrapperProps = {
    children: ReactNode
}

test("returns app context", () => {
    const wrapper: FC<WrapperProps> = ({children}) => (
        <AppProvider>{children}</AppProvider>
    )

    const {result} = renderHook(() => useApp(), {wrapper})

    expect(result.current).toEqual(mockAppContext)
})
