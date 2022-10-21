import {render, screen} from "@testing-library/react"
import SocialLink from "components/SocialLink"
import {expect, test} from "vitest"

test.concurrent("instagram", () => {
    render(<SocialLink platform="instagram" />)
    expect(screen.getByLabelText("instagram"))
})

test.concurrent("github", () => {
    render(<SocialLink platform="github" />)
    expect(screen.getByLabelText("github"))
})

test.concurrent("twitter", () => {
    render(<SocialLink platform="twitter" />)
    expect(screen.getByLabelText("twitter"))
})

test.concurrent("youtube", () => {
    render(<SocialLink platform="youtube" />)
    expect(screen.getByLabelText("youtube"))
})

test.concurrent("twitch", () => {
    render(<SocialLink platform="twitch" />)
    expect(screen.getByLabelText("twitch"))
})

test.concurrent("discord", () => {
    render(<SocialLink platform="discord" />)
    expect(screen.getByLabelText("discord"))
})
