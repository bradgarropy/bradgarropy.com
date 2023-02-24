import {act, renderHook} from "@testing-library/react"
import {useTheme} from "hooks"

const mockGetItem = jest.fn()
const mockSetItem = jest.fn()

beforeEach(() => {
    global.Storage.prototype.getItem = mockGetItem
    global.Storage.prototype.setItem = mockSetItem
})

afterEach(() => {
    mockGetItem.mockReset()
    mockGetItem.mockReset()
})

test("defaults to light theme", () => {
    mockGetItem.mockReturnValue(null)

    const {result} = renderHook(() => useTheme())

    expect(result.current.theme).toEqual("light")
    expect(mockSetItem).toHaveBeenCalledTimes(1)
    expect(mockSetItem).toHaveBeenCalledWith("theme", "light")
    expect(document.documentElement.classList.contains("dark")).toBeFalsy()
})

test("uses localstorage light theme", () => {
    mockGetItem.mockReturnValue("light")

    const {result} = renderHook(() => useTheme())

    expect(result.current.theme).toEqual("light")
    expect(mockSetItem).toHaveBeenCalledTimes(1)
    expect(mockSetItem).toHaveBeenCalledWith("theme", "light")
    expect(document.documentElement.classList.contains("dark")).toBeFalsy()
})

test("uses localstorage dark theme", () => {
    mockGetItem.mockReturnValue("dark")

    const {result} = renderHook(() => useTheme())

    expect(result.current.theme).toEqual("dark")
    expect(mockSetItem).toHaveBeenCalledTimes(1)
    expect(mockSetItem).toHaveBeenCalledWith("theme", "dark")
    expect(document.documentElement.classList.contains("dark")).toBeTruthy()
})

test("switches to light theme", () => {
    mockGetItem.mockReturnValue("dark")

    const {result} = renderHook(() => useTheme())
    expect(result.current.theme).toEqual("dark")

    act(() => {
        result.current.setTheme("light")
    })

    expect(result.current.theme).toEqual("light")
    expect(mockSetItem).toHaveBeenCalledTimes(2)
    expect(mockSetItem).toHaveBeenLastCalledWith("theme", "light")
    expect(document.documentElement.classList.contains("dark")).toBeFalsy()
})

test("switches to dark theme", () => {
    mockGetItem.mockReturnValue("light")

    const {result} = renderHook(() => useTheme())
    expect(result.current.theme).toEqual("light")

    act(() => {
        result.current.setTheme("dark")
    })

    expect(result.current.theme).toEqual("dark")
    expect(mockSetItem).toHaveBeenCalledTimes(2)
    expect(mockSetItem).toHaveBeenLastCalledWith("theme", "dark")
    expect(document.documentElement.classList.contains("dark")).toBeTruthy()
})
