---
title: 💅🏼 styled-components open source contribution
slug: styled-components-open-source-contribution
date: "2018-12-28"
topic: coding
tags: []
---

It's been a while since I've contributed to open source, but recently I was going through the [Advanced React][advanced-react] course by [Wes Bos][wes-bos] and I hit a snag while writing a [styled-components][styled-components] theme.

## issue

Even after reading the [documentation][theming], it took me too long to figure out that `<ThemeProvider>` is required to return a single child node.

```jsx {2,9}
<ThemeProvider theme={theme}>
    <React.Fragment>
        <GlobalStyle />
        <StyledPage>
            <Meta />
            <Header />
            <Container>{this.props.children}</Container>
        </StyledPage>
    </React.Fragment>
</ThemeProvider>
```

## discuss

I thought there was some room for improvement in the documentation to call this out more clearly, so I headed to the styled-components [Spectrum][spectrum] community to talk about my situation.

I started a new thread and it turns out that I wasn't the only one confused by this. [Max Stoiber][mxstbr], one of the maintainers, was very supportive!

## enhance

The change was simple, I added a little blurb to the theming documentation calling out the single child node requirement and offering a bit of explanation.

![Theming Documenation][documentation]

I made a [pull request][pr] containing the changes and Max approved and merged it within eight hours. The changes are [live][theming] right now!

## contribute!

The entire open source process was very easy thanks to the styled-components contribution documentation, Spectrum community, and maintainers.

🖤 Thank you to all who helped me!

Hopefully this goes to show you that all open source contributions are valued, even minor documentation updates. It's not as difficult as you think, so I encourage you to go out and contribute!

[advanced-react]: https://advancedreact.com/
[wes-bos]: https://twitter.com/wesbos
[styled-components]: https://www.styled-components.com/
[theming]: https://www.styled-components.com/docs/advanced#theming
[spectrum]: https://spectrum.chat/styled-components
[mxstbr]: https://twitter.com/mxstbr
[documentation]: https://res.cloudinary.com/bradgarropy/image/upload/f_auto,q_auto/bradgarropy.com/posts/theming-documentation.png
[pr]: https://github.com/styled-components/styled-components-website/pull/410
