---
title: 🌑 next.js dark mode
slug: nextjs-dark-mode
date: "2023-02-27"
topic: coding
---

The dark mode on my website was always pretty half baked, so while I was [converting to Tailwind][tailwind-migration], I spent some time improving it. I had a few major requirements I wanted to implement.

-   The color theme can be modified by the user.
-   The color theme is persisted across reloads.
-   The color theme is persisted across page transitions.
-   There is no light mode flicker.

Let me explain how I accomplished this.

## ♟️ strategy

overall strategy
use react context to manage color theme
persist theme in localstorage
initialize theme from localstorage, default to light mode
prevent light mode flashes

react context
two use effects
theme provider

theme.js
initialization

![dark mode diagram][dark-mode-diagram]

TODO: check out the [pull request][pull-request]  
TODO: reference josh's [perfect dark mode][perfect-dark-mode]

## theme context

```tsx
const ThemeProvider: FC<ThemeProviderProps> = ({children}) => {
    const [theme, setTheme] = useState<Theme>()

    const context: ThemeContextType = {
        theme,
        setTheme,
    }

    return (
        <ThemeContext.Provider value={context}>
            {children}
        </ThemeContext.Provider>
    )
}
```

```tsx
import {ThemeProvider} from "context"

const App = ({Component, pageProps}: AppProps) => {
    return (
        <ThemeProvider>
            <Component {...pageProps} />
        </ThemeProvider>
    )
}
```

```tsx
const useTheme = (): ThemeContextType => {
    const themeCtx = useContext(ThemeContext)
    return themeCtx
}
```

## theme toggle

```tsx
import {useTheme} from "hooks"

const ColorTheme: FC = () => {
    const {theme, setTheme} = useTheme()

    const onClick = () => {
        if (theme === "light") {
            setTheme("dark")
        } else {
            setTheme("light")
        }
    }

    return (
        <button onClick={onClick}>
            {theme === "light" ? <Moon /> : null}
            {theme === "dark" ? <Sun /> : null}
        </button>
    )
}
```

```tsx
useEffect(() => {
    if (theme === "dark") {
        window.localStorage.setItem("theme", "dark")
        document.documentElement.classList.add("dark")
    }

    if (theme === "light") {
        window.localStorage.setItem("theme", "light")
        document.documentElement.classList.remove("dark")
    }
}, [theme])
```

## loading theme

```tsx
useEffect(() => {
    const localTheme = window.localStorage.getItem("theme")
    setTheme(localTheme ?? "light")
}, [])
```

## preventing flicker

```tsx
import Document, {Head, Html, Main, NextScript} from "next/document"
import Script from "next/script"

const Document = () => {
    return (
        <Html>
            <Head />

            <body>
                <Main />
                <NextScript />
                <Script src="/theme.js" strategy="beforeInteractive" />
            </body>
        </Html>
    )
}
```

```javascript
const localTheme = window.localStorage.getItem("theme")

if (localTheme === "light") {
    document.documentElement.classList.remove("dark")
}

if (localTheme === "dark") {
    document.documentElement.classList.add("dark")
}
```

[pull-request]: https://github.com/bradgarropy/bradgarropy.com/pull/349
[perfect-dark-mode]: https://joshwcomeau.com/react/dark-mode
[dark-mode-diagram]: https://res.cloudinary.com/bradgarropy/image/upload/f_auto,q_auto/bradgarropy.com/posts/dark-mode-diagram.png
[tailwind-migration]: https://bradgarropy.com/blog/css-modules-to-tailwind
