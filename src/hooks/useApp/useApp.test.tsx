import {renderHook} from "@testing-library/react-hooks"
import {AppProvider} from "context"
import {useApp} from "hooks"
import {mockAppCtx} from "test-utils/mocks"

const mockAppContext = {
    ...mockAppCtx,
    setOpen: expect.any(Function),
    setTheme: expect.any(Function),
}

test("returns app context", () => {
    const wrapper = ({children}) => <AppProvider>{children}</AppProvider>
    const {result} = renderHook(() => useApp(), {wrapper})

    expect(result.current).toEqual(mockAppContext)
})
