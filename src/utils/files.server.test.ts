import {readdirSync} from "node:fs"

import {expect, test} from "vitest"

import {nowFiles, postFiles, testimonialFiles} from "~/utils/files.server"

test("gets now files", () => {
    const files = readdirSync("content/now")
    expect(Object.keys(nowFiles)).toHaveLength(files.length)
})

test("gets post files", () => {
    const files = readdirSync("content/posts")
    expect(Object.keys(postFiles)).toHaveLength(files.length)
})

test("gets testimonial files", () => {
    const files = readdirSync("content/testimonials")
    expect(Object.keys(testimonialFiles)).toHaveLength(files.length)
})
