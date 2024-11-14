import {render, screen} from "@testing-library/react"
import {expect, test} from "vitest"

import Icon from "~/components/Icon"

const icons = [
    "close",
    "bluesky",
    "discord",
    "feed",
    "gatsby",
    "github",
    "instagram",
    "javascript",
    "link",
    "menu",
    "moon",
    "next",
    "node",
    "react",
    "remix",
    "sun",
    "svelte",
    "twitch",
    "twitter",
    "typescript",
    "tailwind",
    "x",
    "youtube",
]

test("shows icons", () => {
    icons.forEach(icon => {
        render(<Icon name={icon} />)
        expect(screen.getByLabelText(icon)).toBeInTheDocument()
    })
})

test("shows icons with props", () => {
    icons.forEach(icon => {
        render(<Icon name={icon} className="test" />)
        expect(screen.getByLabelText(icon)).toHaveClass("test")
    })
})

test("shows default", () => {
    render(<Icon name="test" />)
    expect(screen.queryByLabelText("text")).not.toBeInTheDocument()
})
