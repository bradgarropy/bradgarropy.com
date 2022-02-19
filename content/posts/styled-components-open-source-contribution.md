---
title: 💅🏼 styled-components open source contribution
slug: styled-components-open-source-contribution
date: "2018-12-28"
topic: coding
---

It's been a while since I've contributed to open source, but recently I was going through the [Advanced React][1] course by [Wes Bos][2] and I hit a snag while writing a [styled-components][3] theme.

## issue

Even after reading the [documentation][4], it took me too long to figure out that `<ThemeProvider>` is required to return a single child node.

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

I thought there was some room for improvement in the documentation to call this out more clearly, so I headed to the styled-components [Spectrum][5] community to talk about my situation.

I started a new thread and it turns out that I wasn't the only one confused by this. [Max Stoiber][6], one of the maintainers, was very supportive!

## enhance

The change was simple, I added a little blurb to the theming documentation calling out the single child node requirement and offering a bit of explanation.

![Theming Documenation][7]

I made a [pull request][8] containing the changes and Max approved and merged it within eight hours. The changes are [live][4] right now!

## contribute!

The entire open source process was very easy thanks to the styled-components contribution documentation, Spectrum community, and maintainers.

🖤 Thank you to all who helped me!

Hopefully this goes to show you that all open source contributions are valued, even minor documentation updates. It's not as difficult as you think, so I encourage you to go out and contribute!

[1]: https://advancedreact.com/
[2]: https://twitter.com/wesbos
[3]: https://www.styled-components.com/
[4]: https://www.styled-components.com/docs/advanced#theming
[5]: https://spectrum.chat/styled-components
[6]: https://twitter.com/mxstbr
[7]: /images/posts/theming-documentation.png
[8]: https://github.com/styled-components/styled-components-website/pull/410
