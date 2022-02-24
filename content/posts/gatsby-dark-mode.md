---
title: 🌑 gatsby dark mode
slug: gatsby-dark-mode
date: "2021-04-30"
topic: coding
---

You're not one of the cool kids nowadays if you don't have a dark mode on your site. So I figured it was time to join the club and get this implemented. My previous work [converting styled component variables to css custom properties][sc-to-cv] laid the groundwork for this feature.

_Here's the full [pull request][pull-request], but I gotta warn you, it's pretty messy._

![dark mode][dark-mode]

## 🎨 color intentions

The first step was to separate the colors from their intentions. You may have not heard the term _intention_ before, but it essentially means the intended use of a color. For example, you could have intentions like `heading-color`, `text-color`, or `background-color`. This gives us a layer of abstraction, so we can swap out light and dark values based on the color theme.

```css
:root {
    /* colors */
    --black: #000000;
    --darkGrey: #aaaaaa;
    --grey: #dddddd;
    --white: #ffffff;
    --purple: #c792ea;

    /* intentions */
    --primary: var(--purple);
    --text: var(--black);
    --background: var(--white);
}
```

## 🎣 app context

Next, I needed a way to hold the selected color theme in global state. I used the `Context` API to provide the theme to the application. The context wraps the `Layout` component, and I used [gatsby-plugin-layout][gatsby-plugin-layout] to render the `Layout` on every page. This plugin also has the benefit of preserving the context values through page navigation.

```javascript
const AppProvider = ({children}) => {
    const [theme, setTheme] = useState("light")

    const context = {
        theme,
        setTheme,
    }

    return <AppContext.Provider value={context}>{children}</AppContext.Provider>
}
```

## 🔆 toggle button

Finally, I tie everything together with a toggle button. This button shows a moon icon if the current theme is `light`, and a sun icon if the current theme is `dark`. The theme toggle uses the `App` context to get and set the current `theme` when clicked.

```javascript
const ColorTheme = () => {
    const {theme, setTheme} = useApp()
    const label = theme === "light" ? "dark" : "light"

    useEffect(() => {
        const root = document.documentElement

        root.style.setProperty(
            "--background",
            theme === "light" ? "var(--white)" : "var(--black)",
        )

        root.style.setProperty(
            "--text",
            theme === "light" ? "var(--black)" : "var(--white)",
        )
    }, [theme])

    const onClick = () => {
        if (theme === "light") {
            setTheme("dark")
        } else {
            setTheme("light")
        }
    }

    return (
        <ThemeToggle onClick={onClick} aria-label={label}>
            {theme === "light" ? <Moon /> : <Sun />}
        </ThemeToggle>
    )
}
```

When the `theme` changes, a `useEffect` runs and updates the custom properties for the color intentions. At this time I only have two intentions that need updating. In the future, if I have more properties to change, this effect can be improved by creating a `css` class that overrides the properties, and applying it to the `:root` element.

## 🌟 improvements

While this dark modes works very well, and persists through page navigation, it's far from complete. It still lacks the following features:

-   initialize the color theme to match system preferences
-   persist the color theme across page reloads

[Josh Comeau][josh-comeau] wrote a great article about the [perfect dark mode][perfect-dark-mode], which I'll use as a reference to implement these last two features.

**Give dark mode a try, [click the moon][moon] at the top of the page!**

[sc-to-cv]: https://bradgarropy.com/blog/from-styled-components-to-css-variables
[josh-comeau]: https://twitter.com/joshwcomeau
[perfect-dark-mode]: https://www.joshwcomeau.com/react/dark-mode
[pull-request]: https://github.com/bradgarropy/bradgarropy.com/pull/205/files
[gatsby-plugin-layout]: https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-layout
[moon]: #
[dark-mode]: /images/posts/dark-mode.png
