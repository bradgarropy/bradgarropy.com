---
title: 🧶 web scraping with puppeteer
slug: web-scraping-with-puppeteer
date: "2020-12-05"
topic: coding
---

[Puppeteer][puppeteer] is a great way to automate tasks on the web if an API isn't available or doesn't provide what you're looking for. Puppeteer runs on `node`, and can be started in full or headless mode. Let's go through an example where we search for this article on [bradgarropy.com][website].

First we install [Puppeteer][puppeteer] into our project.

```shell
npm install puppeteer
```

Then we can import `puppeteer` and scaffold out our automation script. Puppeteer is based on `promises`, so we'll have to set up a top level `async` function to call. The `findPost` function creates a new [browser][browser], opens a blank [page][page], and then closes the browser.

```javascript
const puppeteer = require("puppeteer")

const findPost = async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    // script goes here

    await browser.close()
}

findPost()
```

Next we use the `page` object to navigate to the website. If we need to wait for additional content to load after navigation, like client side data fetching, we could provide the `waitUntil` option.

```javascript
await page.goto("https://bradgarropy.com/blog")
```

Now it's time to type into the search bar. Because the search bar updates results `onChange`, I've opted for the [keyboard][keyboard] `type` method.

```javascript
await page.focus('input[placeholder="search blog"]')
await page.keyboard.type("web scraping with puppeteer")
```

If instead we simply needed to fill an `input` and submit the value, we could use `page.$eval()` to directly set the input's `value`.

At this point we should be seeing a filtered list of posts. Let's click on the first result, wait for that page to load, and take a screenshot.

```javascript
await page.click("section h1 a")
await page.waitForNavigation()
await page.screenshot({path: "screenshot.png"})

await browser.close()
```

Screenshots will come in handy while developing your automation script, as running a headless browser doesn't provide much visibility.

![web scraping with puppeteer][screenshot]

The last tip I'll leave you with is to be considerate of where you are placing `console.log()` statements. Remember that much of [Puppeteer][puppeteer] is run in the context of the headless browser, so some of your log statements won't show up in the `node` console where your script is running.

Now you can go script whatever you'd like! For instance, I automated the process of retrieving what user liked a particular tweet of mine. Share what you've automated with me on [Twitter][twitter].

[screenshot]: /images/posts/screenshot.png
[twitter]: https://twitter.com/bradgarropy
[keyboard]: https://pptr.dev/#?product=Puppeteer&version=v5.5.0&show=api-class-keyboard
[page]: https://pptr.dev/#?product=Puppeteer&version=v5.5.0&show=api-class-page
[browser]: https://pptr.dev/#?product=Puppeteer&version=v5.5.0&show=api-class-browser
[website]: https://bradgarropy.com
[puppeteer]: https://pptr.dev
