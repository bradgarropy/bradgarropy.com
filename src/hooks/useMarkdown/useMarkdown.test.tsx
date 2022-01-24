import {render, screen} from "@testing-library/react"
import {renderHook} from "@testing-library/react-hooks"
import {useMarkdown} from "hooks"

test("renders local links", () => {
    const name = "blog"

    const {result} = renderHook(() =>
        useMarkdown(`<a href="/${name}">${name}</a>`),
    )

    render(result.current)

    const link = screen.getByText(name)
    expect(link).toHaveAttribute("href", `/${name}`)
})

test("renders external links", () => {
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

test("renders images", () => {
    const name = "profile"

    const {result} = renderHook(() =>
        useMarkdown(
            `<img src="/${name}.jpg" alt="${name}" width="100" height="100"/>`,
        ),
    )

    render(result.current)

    const image = screen.getByAltText(name)
    expect(image)
    expect(image.parentElement.parentElement).toHaveClass("figure")
})
