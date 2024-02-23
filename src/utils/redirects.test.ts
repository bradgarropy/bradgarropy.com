import {redirect} from "@remix-run/node"
import {expect, test, vi} from "vitest"

import {mockRedirects} from "~/test-utils/mocks/redirects"
import {checkRedirects} from "~/utils/redirects"

vi.mock("vercel.json", () => {
    const config = {redirects: mockRedirects}
    return config
})

test("redirects permanently", () => {
    const request = new Request("https://bradgarropy.com/permanent")
    const result = checkRedirects(request)

    expect(result).toEqual(redirect("https://permanent.com", {status: 308}))
})

test("redirects temporarily", () => {
    const request = new Request("https://bradgarropy.com/temporary")
    const result = checkRedirects(request)

    expect(result).toEqual(redirect("https://temporary.com", {status: 307}))
})

test("does not redirect", () => {
    const request = new Request("https://bradgarropy.com/blog")
    const result = checkRedirects(request)

    expect(result).toBeUndefined()
})
