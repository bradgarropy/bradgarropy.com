// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MockLink = ({to, children, ...props}: any) => (
    <a href={to} {...props}>
        {children}
    </a>
)

const mockSearchParams = {
    get: jest.fn(),
}

const mockSetSearchParams = jest.fn()

const mockUseSearchParams = () => {
    return [mockSearchParams, mockSetSearchParams]
}

const mockUseLocation = jest.fn().mockReturnValue({pathname: "/"})

const actualRemix = jest.requireActual("@remix-run/react")

const mockRemix = {
    ...actualRemix,
    Link: MockLink,
    useLocation: mockUseLocation,
    useSearchParams: mockUseSearchParams,
}

export {mockRemix, mockSearchParams, mockSetSearchParams, mockUseLocation}
