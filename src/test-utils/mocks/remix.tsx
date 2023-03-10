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

const actualRemix = jest.requireActual("@remix-run/react")

const mockRemix = {
    ...actualRemix,
    Link: MockLink,
    useSearchParams: mockUseSearchParams,
}

export {mockRemix, mockSearchParams, mockSetSearchParams}
