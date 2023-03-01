import {renderHook} from "@testing-library/react"
import type {AppContextType} from "context"
import {AppProvider} from "context"
import {useApp} from "hooks"
import {mockAppCtx} from "test-utils/mocks"

const mockAppContext: AppContextType = {
    ...mockAppCtx,
    setOpen: expect.any(Function),
}

test("returns app context", () => {
    const wrapper = ({children}) => <AppProvider>{children}</AppProvider>
    const {result} = renderHook(() => useApp(), {wrapper})

    expect(result.current).toEqual(mockAppContext)
})
