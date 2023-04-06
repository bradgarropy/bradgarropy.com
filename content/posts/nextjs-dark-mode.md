---
title: 🌑 next.js dark mode
slug: nextjs-dark-mode
date: "2023-02-27"
topic: coding
tags: []
---

The dark mode on my website was always pretty half baked, so while I was [converting to Tailwind][tailwind-migration], I spent some time improving it. There were a few major requirements I wanted to implement.

-   The color theme can be modified by the user.
-   The color theme is persisted across reloads.
-   The color theme is persisted across page transitions.
-   There is no light mode flicker.

The rest of the post will go into more detail explaining how I accomplished this. You can also reference the [pull request][pull-request] for the full implementation.

## ♟️ strategy

My overall strategy involved a few different aspects. First, I maintained the `theme` state in a [React context][context]. Next, I persisted the theme across reloads using [local storage][local-storage]. Finally, I applied the theme by adding a `dark` class to the `html` element, and [Tailwind][tailwind] handled the rest of the styling.

![dark mode diagram][dark-mode-diagram]

Anytime the `theme` changes, both `localStorage` and the `html` class are updated to reflect the current value. When the application loads, it checks `localStorage` for an existing user preference before defaulting to light mode. And last but not least, a prerender script is run to initialize the `html` class to match the value in `localStorage` in order to prevent light mode flicker.

## 🤲🏼 theme provider

I started by creating the `ThemeContext` and `ThemeProvider` so that the theme could be used freely throughout the application without prop drilling. At it's core, it just holds the `theme` value in state.

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

In order for this context to be shared with the rest of the application, I created a custom `_app.tsx` to wrap everything in the `ThemeProvider`.

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

Once the provider was in place, I was able to access the `theme` from anywhere by using the `useTheme` hook shown below.

```tsx
const useTheme = (): ThemeContextType => {
    const themeCtx = useContext(ThemeContext)
    return themeCtx
}
```

Next I started making the theme respond to user interactions.

## 🌗 theme toggle

In the header of my site I have a theme toggle. This is where I used `useTheme` to respond to user interactions. Now the newly selected theme would be populated in the context.

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

Anytime the theme changed, I updated both the `localStorage` value and the `html` class to match. This process was managed with a `useEffect` that ran anytime `theme` changed.

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

## ⏳ theme loading

Now I had to handle initializing the theme. Because the user's latest choice was in `localStorage`, I created a `useEffect` that runs when the provider is mounted that pulled the persisted value and initialized the context. However, if no theme was stored, I defaulted to light mode.

```tsx
useEffect(() => {
    const localTheme = window.localStorage.getItem("theme")
    setTheme(localTheme ?? "light")
}, [])
```

## 📸 preventing flicker

So far the implementation was pretty straight forward, but there was still one glaring problem. If the user preferred dark mode, there was a flash of light mode before React kicked in and initialized the context to match `localStorage`. In order to prevent this flicker, I needed a script to run _before_ React rendered.

[Next.js][nextjs] had me covered here with their `<Script>` component. This allowed me to inject some custom JavaScript that executed in the `<Head>` prior to the application rendering.

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

The prerender script was very short, all it had to do was make the initial `html` class match whatever `localStorage` had, so no flicker would occur once React rendered.

```javascript
const localTheme = window.localStorage.getItem("theme")

if (localTheme === "light") {
    document.documentElement.classList.remove("dark")
}

if (localTheme === "dark") {
    document.documentElement.classList.add("dark")
}
```

## 🔫 perfect dark mode

Although this implementation was a bit confusing, the result was exactly what I was looking for. I took a lot of inspiration from [Josh Comeau's][josh-comeau] post titled [The Quest for the Perfect Dark Mode][perfect-dark-mode], and made some changes to adjust the solution to fit [Next.js][nextjs].

This isn't a problem I'd like to solve twice, so I'm considering publishing this solution on [npm][npm] for reuse in my other projects. Let me know if that's something you'd be interested in!

[pull-request]: https://github.com/bradgarropy/bradgarropy.com/pull/349
[perfect-dark-mode]: https://joshwcomeau.com/react/dark-mode
[dark-mode-diagram]: https://res.cloudinary.com/bradgarropy/image/upload/f_auto,q_auto/bradgarropy.com/posts/dark-mode-diagram.png
[tailwind-migration]: https://bradgarropy.com/blog/css-modules-to-tailwind
[context]: https://reactjs.org/docs/context.html
[tailwind]: https://tailwindcss.com/
[nextjs]: https://nextjs.org/
[local-storage]: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
[josh-comeau]: https://twitter.com/JoshWComeau
[npm]: https://www.npmjs.com/
