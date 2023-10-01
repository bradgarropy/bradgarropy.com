import {render, screen} from "@testing-library/react"

import SocialLink from "~/components/SocialLink"

test("discord", () => {
    render(<SocialLink platform="discord" />)
    expect(screen.getByLabelText("discord"))
})

test("github", () => {
    render(<SocialLink platform="github" />)
    expect(screen.getByLabelText("github"))
})

test("instagram", () => {
    render(<SocialLink platform="instagram" />)
    expect(screen.getByLabelText("instagram"))
})

test("twitter", () => {
    render(<SocialLink platform="twitter" />)
    expect(screen.getByLabelText("twitter"))
})

test("twitch", () => {
    render(<SocialLink platform="twitch" />)
    expect(screen.getByLabelText("twitch"))
})

test("x", () => {
    render(<SocialLink platform="x" />)
    expect(screen.getByLabelText("x"))
})

test("youtube", () => {
    render(<SocialLink platform="youtube" />)
    expect(screen.getByLabelText("youtube"))
})
