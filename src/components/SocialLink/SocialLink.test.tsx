import {render, screen} from "@testing-library/react"
import SocialLink from "components/SocialLink"
import {expect, test} from "vitest"

test("instagram", () => {
    render(<SocialLink platform="instagram" />)
    expect(screen.getByLabelText("instagram"))
})

test("github", () => {
    render(<SocialLink platform="github" />)
    expect(screen.getByLabelText("github"))
})

test("twitter", () => {
    render(<SocialLink platform="twitter" />)
    expect(screen.getByLabelText("twitter"))
})

test("youtube", () => {
    render(<SocialLink platform="youtube" />)
    expect(screen.getByLabelText("youtube"))
})

test("twitch", () => {
    render(<SocialLink platform="twitch" />)
    expect(screen.getByLabelText("twitch"))
})

test("discord", () => {
    render(<SocialLink platform="discord" />)
    expect(screen.getByLabelText("discord"))
})
