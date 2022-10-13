import {AppCtx} from "types/context"
import {vi} from "vitest"

const mockAppCtx: AppCtx = {
    open: false,
    setOpen: vi.fn(),
    theme: "light",
    setTheme: vi.fn(),
}

export {mockAppCtx}
