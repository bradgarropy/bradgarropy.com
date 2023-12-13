import {act, renderHook} from "@testing-library/react"
import type {FC, ReactNode} from "react"
import {expect, test} from "vitest"

import {ThemeProvider} from "~/context/Theme"
import useTheme from "~/hooks/useTheme"
import {mockSubmit} from "~/test-utils/mocks/remix"

type WrapperProps = {
    children: ReactNode
}

test("defaults to light theme", () => {
    const wrapper: FC<WrapperProps> = ({children}) => (
        <ThemeProvider>{children}</ThemeProvider>
    )

    const {result} = renderHook(() => useTheme(), {wrapper})

    expect(result.current.theme).toEqual("light")
    expect(document.documentElement).toHaveClass("light")
    expect(document.documentElement).not.toHaveClass("dark")
})

test("defaults to dark theme", () => {
    const wrapper: FC<WrapperProps> = ({children}) => (
        <ThemeProvider defaultTheme="dark">{children}</ThemeProvider>
    )

    const {result} = renderHook(() => useTheme(), {wrapper})

    expect(result.current.theme).toEqual("dark")
    expect(document.documentElement).toHaveClass("dark")
    expect(document.documentElement).not.toHaveClass("light")
})

test("switches to light theme", () => {
    const wrapper: FC<WrapperProps> = ({children}) => (
        <ThemeProvider defaultTheme="dark">{children}</ThemeProvider>
    )

    const {result} = renderHook(() => useTheme(), {wrapper})

    expect(result.current.theme).toEqual("dark")

    act(() => {
        result.current.setTheme("light")
    })

    expect(result.current.theme).toEqual("light")

    expect(document.documentElement).toHaveClass("light")
    expect(document.documentElement).not.toHaveClass("dark")

    expect(mockSubmit).toHaveBeenCalledTimes(2)

    expect(mockSubmit).toHaveBeenLastCalledWith(
        {theme: "light"},
        {action: "api/theme", method: "post"},
    )
})

test("switches to dark theme", () => {
    const wrapper: FC<WrapperProps> = ({children}) => (
        <ThemeProvider>{children}</ThemeProvider>
    )

    const {result} = renderHook(() => useTheme(), {wrapper})

    expect(result.current.theme).toEqual("light")

    act(() => {
        result.current.setTheme("dark")
    })

    expect(result.current.theme).toEqual("dark")

    expect(document.documentElement).toHaveClass("dark")
    expect(document.documentElement).not.toHaveClass("light")

    expect(mockSubmit).toHaveBeenCalledTimes(2)

    expect(mockSubmit).toHaveBeenLastCalledWith(
        {theme: "dark"},
        {action: "api/theme", method: "post"},
    )
})
