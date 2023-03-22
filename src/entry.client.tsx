import {RemixBrowser} from "@remix-run/react"
import {hydrateRoot} from "react-dom/client"

const localTheme = window.localStorage.getItem("theme")

if (localTheme === "light") {
    document.documentElement.classList.remove("dark")
}

if (localTheme === "dark") {
    document.documentElement.classList.add("dark")
}

hydrateRoot(document, <RemixBrowser />)
