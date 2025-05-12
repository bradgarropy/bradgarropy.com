import {vi} from "vitest"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MockLink = ({to, children, ...props}: any) => (
    <a href={to} {...props}>
        {children}
    </a>
)

const mockSearchParams = {
    get: vi.fn(),
}

const mockSetSearchParams = vi.fn()

const mockUseSearchParams = () => {
    return [mockSearchParams, mockSetSearchParams]
}

const mockUseLocation = vi.fn().mockReturnValue({pathname: "/"})

const mockSubmit = vi.fn()

const mockUseFetcher = vi.fn().mockReturnValue({
    submit: mockSubmit,
})

const actualRemix = vi.importActual("react-router")

const mockRemix = {
    ...actualRemix,
    Link: MockLink,
    useFetcher: mockUseFetcher,
    useLocation: mockUseLocation,
    useSearchParams: mockUseSearchParams,
}

export {
    mockRemix,
    mockSearchParams,
    mockSetSearchParams,
    mockSubmit,
    mockUseFetcher,
    mockUseLocation,
}
