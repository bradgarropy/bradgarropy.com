import {render, screen} from "@testing-library/react"
import {renderHook} from "@testing-library/react-hooks"
import {useMarkdown} from "hooks"

describe("renders links", () => {
    test("local links", () => {
        const name = "blog"

        const {result} = renderHook(() =>
            useMarkdown(`<a href="/${name}">${name}</a>`),
        )

        render(result.current)

        const link = screen.getByText(name)
        expect(link).toHaveAttribute("href", `/${name}`)
    })

    test("external links", () => {
        const name = "example"

        const {result} = renderHook(() =>
            useMarkdown(`<a href="https://${name}.com">${name}</a>`),
        )

        render(result.current)
        const link = screen.getByText(name)

        expect(link).toHaveAttribute("href", `https://${name}.com`)
        expect(link).toHaveAttribute("rel", "noopener noreferrer")
        expect(link).toHaveAttribute("target", "_blank")
    })
})

test("renders images", () => {
    const name = "profile"

    const {result} = renderHook(() =>
        useMarkdown(
            `<img src="/${name}.jpg" alt="${name}" width="100" height="100"/>`,
        ),
    )

    render(result.current)

    const image = screen.getByAltText(name)

    expect(image.parentElement.parentElement).toHaveAttribute(
        "href",
        `/${name}.jpg`,
    )
})

describe("renders headers", () => {
    test("level one", () => {
        const {result} = renderHook(() => useMarkdown("<h1>Heading one</h1>"))
        render(result.current)

        const icon = screen.getByLabelText("link")
        const link = icon.parentElement
        const heading = link.parentElement

        expect(link).toHaveAttribute("href", "#heading-one")
        expect(heading).toHaveAttribute("id", "heading-one")
    })

    test("level two", () => {
        const {result} = renderHook(() => useMarkdown("<h2>Heading two</h2>"))
        render(result.current)

        const icon = screen.getByLabelText("link")
        const link = icon.parentElement
        const heading = link.parentElement

        expect(link).toHaveAttribute("href", "#heading-two")
        expect(heading).toHaveAttribute("id", "heading-two")
    })

    test("level three", () => {
        const {result} = renderHook(() => useMarkdown("<h3>Heading three</h3>"))
        render(result.current)

        const icon = screen.getByLabelText("link")
        const link = icon.parentElement
        const heading = link.parentElement

        expect(link).toHaveAttribute("href", "#heading-three")
        expect(heading).toHaveAttribute("id", "heading-three")
    })
})
