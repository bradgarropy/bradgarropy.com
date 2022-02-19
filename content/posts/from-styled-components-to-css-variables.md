---
title: 💅🏼 from styled components to css variables
slug: from-styled-components-to-css-variables
date: "2021-04-16"
topic: coding
---

I read that if a [tweet thread][thread] is more than three tweets long it should have been a blog post. Well, then so be it! Let me tell you about the time I converted my website from a [styled-components][styled-components] theme to [css variables][css-variables] on a whim.

The first thing I had to do was convert the `theme` object into custom properties. I placed the variables in the `:root` so that they're accessible throughout my site.

```javascript
const GlobalStyles = createGlobalStyle`
    :root {
        /* colors */
        --black: #000000;
        --darkGrey: #aaaaaa;
        --grey: #dddddd;
        --white: #ffffff;
        --purple: #c792ea;

        /* palette */
        --primary: var(--purple);
    }
`
```

You'll see `createGlobalStyle` here because I'm still using `styled-components`, just not the `ThemeProvider`. I'm considering moving to [css modules][css-modules] in the future.

Without a `theme`, I was able to remove the `<ThemeProvider>` wrapper in my `<Layout>` component. This also allowed me to completely remove the custom `render` method for my `jest` tests.

```javascript
const Layout = ({children}) => {
    return (
        <>
            <GlobalStyles />

            <Container>
                <Header />
                <Content>{children}</Content>
                <Footer />
            </Container>
        </>
    )
}
```

All that was left was to replace all of the theme variables with custom properties. This left me with styles that were much more readable as opposed to the nasty destructuring of `styled-components` variables.

```javascript
const NavigationLink = styled(Link)`
    color: var(--black);

    :hover {
        color: var(--primary);
    }
`
```

Overall it was a [net negative PR][pr], as I removed the need for the `<ThemeProvider>` in a few places. Although the change was small, it touched plenty of files. Luckily my [tests][tests] gave me confidence that everything still worked.

![pr stats][pr-stats]

In my opinion, transitioning from a `styled-components` theme to `css` custom properties has many benefits.

-   Runtime access to variables
-   Improved style readability
-   No rendering overhead
-   Reduced bundle size
-   Simpler test setup

I'm considering dropping CSS-in-JS completely now that vanilla `css` offers variables and modules, as that was really the only reason I chose `styled-components` in the first place.

What about you, what's your preferred method of authoring styles?

[thread]: https://twitter.com/bradgarropy/status/1382187648547115008
[pr]: https://github.com/bradgarropy/bradgarropy.com/pull/197
[pr-stats]: /images/posts/pr-stats.png
[css-variables]: https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties
[styled-components]: https://styled-components.com
[css-modules]: https://github.com/css-modules/css-modules
[tests]: https://github.com/bradgarropy/bradgarropy.com/actions/runs/746999993
