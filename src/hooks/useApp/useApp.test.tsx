import {renderHook} from "@testing-library/react"
import {AppProvider} from "context"
import {useApp} from "hooks"
import {mockAppCtx} from "test-utils/mocks"
import {expect, test} from "vitest"

const mockAppContext = {
    ...mockAppCtx,
    setOpen: expect.any(Function),
    setTheme: expect.any(Function),
}

test.concurrent("returns app context", () => {
    const wrapper = ({children}) => <AppProvider>{children}</AppProvider>
    const {result} = renderHook(() => useApp(), {wrapper})

    expect(result.current).toEqual(mockAppContext)
})
