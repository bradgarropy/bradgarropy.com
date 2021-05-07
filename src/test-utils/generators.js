import {mockAppCtx, mockTwitchResponse} from "test-utils/mocks"

const generateAppCtx = overrides => {
    const appCtx = {
        ...mockAppCtx,
        ...overrides,
    }

    return appCtx
}

const generateTwitchResponse = overrides => {
    const twitchResponse = {
        data: [
            {
                ...mockTwitchResponse,
                ...overrides,
            },
        ],
    }

    return twitchResponse
}

export {generateAppCtx, generateTwitchResponse}
