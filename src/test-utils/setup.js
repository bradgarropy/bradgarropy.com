import "jest-styled-components"
import "@testing-library/jest-dom"

global.___loader = {
    enqueue: jest.fn(),
}
