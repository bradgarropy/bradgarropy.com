import {AppCtx} from "types/context"

const mockAppCtx: AppCtx = {
    open: false,
    setOpen: jest.fn(),
    theme: "light",
    setTheme: jest.fn(),
}

export {mockAppCtx}
