---
title: 👙 my favorite layout
slug: my-favorite-layout
date: "2019-05-29"
topic: coding
---

Every time I spin up a new website, I find myself settling on the same layout: a tried and true three row header / content / footer design. With the widespread support of [CSS grid][grid], it's gotten much easier to implement. I'll show you how!

Before we get started, here is a [CodeSandbox][codesandbox] of the final layout. I like this layout because the footer aways sits at the bottom of the viewport, regardless of the content height. Short bits of content remain vertically centered, while long chunks of content cause the page to scroll.

https://codesandbox.io/s/my-favorite-layout-h3fpz?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fcomponents%2FApp.js&view=preview

I start by scaffolding out the `App` component into the three main sections: `Header`, `Content`, and `Footer`.

```javascript {5-7}
const App = () => {
    return (
        <BrowserRouter>
            <div className="app">
                <Header />
                <Content />
                <Footer />
            </div>
        </BrowserRouter>
    )
}
```

Then I define a row based grid, where the `Header` and `Footer` take up only the space they need with `auto`, and the `Content` takes up the rest of the space with `1fr`. It's also very important to specify `min-height: 100vh`. This ensures that no matter how short the content is, the grid will take up the entire height of the viewport, keeping the `Footer` at the bottom.

```css {3-5}
.app {
    font-family: sans-serif;
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
}
```

And that's all it takes to code my favorite layout.
What are your go to designs? Share them with me on [Twitter][twitter]!

[grid]: https://css-tricks.com/snippets/css/complete-guide-grid
[codesandbox]: https://codesandbox.io/embed/my-favorite-layout-h3fpz?autoresize=1&fontsize=14&hidenavigation=1&module=%2Fsrc%2Fcomponents%2FApp.js
[twitter]: https://twitter.com/bradgarropy
