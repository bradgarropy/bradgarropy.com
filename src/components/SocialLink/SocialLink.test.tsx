import {render, screen} from "@testing-library/react"
import {expect, test} from "vitest"

import SocialLink from "~/components/SocialLink"

test("discord", () => {
    render(<SocialLink platform="discord" />)
    expect(screen.getByLabelText("discord")).toBeInTheDocument()
})

test("github", () => {
    render(<SocialLink platform="github" />)
    expect(screen.getByLabelText("github")).toBeInTheDocument()
})

test("feed", () => {
    render(<SocialLink platform="feed" />)
    expect(screen.getByLabelText("feed")).toBeInTheDocument()
})

test("instagram", () => {
    render(<SocialLink platform="instagram" />)
    expect(screen.getByLabelText("instagram")).toBeInTheDocument()
})

test("twitter", () => {
    render(<SocialLink platform="twitter" />)
    expect(screen.getByLabelText("twitter")).toBeInTheDocument()
})

test("twitch", () => {
    render(<SocialLink platform="twitch" />)
    expect(screen.getByLabelText("twitch")).toBeInTheDocument()
})

test("x", () => {
    render(<SocialLink platform="x" />)
    expect(screen.getByLabelText("x")).toBeInTheDocument()
})

test("youtube", () => {
    render(<SocialLink platform="youtube" />)
    expect(screen.getByLabelText("youtube")).toBeInTheDocument()
})
