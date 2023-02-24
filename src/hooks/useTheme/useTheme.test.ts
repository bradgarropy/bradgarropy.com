import {act, renderHook} from "@testing-library/react"
import {useTheme} from "hooks"

test("returns default theme", () => {
    const {result} = renderHook(() => useTheme())
    const [theme] = result.current
    expect(theme).toEqual("light")
})

test("returns light theme", () => {
    const {result} = renderHook(() => useTheme("light"))
    const [theme] = result.current
    expect(theme).toEqual("light")
})

test("returns dark theme", () => {
    const {result} = renderHook(() => useTheme("dark"))
    const [theme] = result.current
    expect(theme).toEqual("dark")
})

test("sets dark theme", () => {
    const {result} = renderHook(() => useTheme("light"))
    expect(result.current[0]).toEqual("light")

    act(() => {
        result.current[1]("dark")
    })

    expect(result.current[0]).toEqual("dark")
})

test("sets light theme", () => {
    const {result} = renderHook(() => useTheme("dark"))
    expect(result.current[0]).toEqual("dark")

    act(() => {
        result.current[1]("light")
    })

    expect(result.current[0]).toEqual("light")
})
