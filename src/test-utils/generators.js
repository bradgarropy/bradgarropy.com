import {mockAppCtx} from "test-utils/mocks"

const generateAppCtx = overrides => {
    const appCtx = {
        ...mockAppCtx,
        ...overrides,
    }

    return appCtx
}

export {generateAppCtx}
