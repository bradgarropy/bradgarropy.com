const localTheme = window.localStorage.getItem("theme")

if (localTheme === "light") {
    document.documentElement.classList.remove("dark")
}

if (localTheme === "dark") {
    document.documentElement.classList.add("dark")
}
