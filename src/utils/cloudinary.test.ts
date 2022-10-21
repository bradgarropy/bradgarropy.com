import {createImageUrl, createYouTubeUrl} from "utils/cloudinary"
import {expect, test} from "vitest"

test("creates internal image url", () => {
    const url = createImageUrl("/photo.jpg")

    expect(url).toEqual(
        "https://res.cloudinary.com/bradgarropy/image/upload/f_auto,q_auto/bradgarropy.com/photo.jpg",
    )
})

test("creates external image url", () => {
    const url = createImageUrl("https://example.com/photo.jpg")

    expect(url).toEqual(
        "https://res.cloudinary.com/bradgarropy/image/fetch/f_auto,q_auto/https://example.com/photo.jpg",
    )
})

test("throws on invalid url", () => {
    expect(() => createImageUrl("file://photo.jpg")).toThrow(
        "Image location is not an internal path or an external url: file://photo.jpg",
    )
})

test("creates youtube url", () => {
    const url = createYouTubeUrl("abc123")

    expect(url).toEqual(
        "https://res.cloudinary.com/bradgarropy/image/youtube/f_auto,q_auto/abc123.jpg",
    )
})
