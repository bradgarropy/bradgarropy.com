---
title: 🌲 cloudflare worker link tree
slug: cloudflare-worker-link-tree
date: "2021-06-28"
topic: coding
---

I've heard a lot about [Cloudflare Workers][workers], but until recently I've never created one. Today I built and deployed my first worker, so I'd like to teach you how to do the same thing!

## 🤔 what are cloudflare workers?

[Cloudflare Workers][workers] is a globally distributed, auto-scaling severless application platform where you can execute your application code in many different languages. It comes with a [web dashboard][dashboard] and a [cli tool][cli] for easy management of your workers.

## 👨🏼‍💻 building a link tree

The first worker I built was a clone of [linktree][linktree], but with a little added flare. I'll walk you through how to build a simpler version of this link tree.

All of the code is located on [GitHub][github] in the [cloudflare-link-tree][repo] repository.

![link tree][finished]

Our application will have two endpoints. `/links` will return raw `json` data for all of our links, and any other route will return a rendered HTML version of the link tree.

### create a cloudflare account

Before we get started, you'll have to [sign up][signup] for a Cloudflare account. Don't worry, there's a great [free tier][pricing] and you don't have to hand over a credit card to get started.

### install the workers cli

Cloudflare made it easy to manage your workers and test them locally with a cli tool called [wrangler][cli]. Install it globally as shown below.

```bash
npm install --global @cloudflare/wrangler
```

Then, login to Cloudflare from `wrangler`.

```bash
wrangler login
```

Now you're ready to start building!

### generate a worker

While you can start from scratch, Cloudflare provides lots of [starter templates][templates] to get a worker up and running quickly. These templates are simply GitHub repositories, so you can even create your own.

To begin our link tree, let's use `wrangler` to generate a basic [worker template][worker-template].

```bash
wrangler generate link-tree https://github.com/cloudflare/worker-template
```

Then, head over to the directory and install the dependencies.

```bash
cd link-tree
npm install
```

Finally, we'll modify the `wrangler.toml` file to use `webpack` as a build tool, as well as add our account id to connect the worker with Cloudflare. If you can't find your account id, run `wrangler whoami` to see it.

```toml
name = "link-tree"
type = "webpack"

account_id = "<ACCOUNT_ID>"
workers_dev = true
route = ""
zone_id = ""
```

We're all set for local development and ready for deployments to Cloudflare Workers.

### link tree data

Before we can get to implenting the link tree, we need some data to work with. Create a `links.js` file and add some links to share. I've included an example of mine below.

```javascript
const links = [
    {name: "Website", url: "bradgarropy.com"},
    {name: "GitHub", url: "https://github.com/bradgarropy"},
    {name: "YouTube", url: "https://youtube.com/bradgarropy"},
]

export default links
```

### routing requests

You can think of workers like a miniature web application that lives on a CDN. Web applications typically handle many different kinds of requests across many different endpoints. So let's include a router to lay out the infrastructure of our worker.

I chose [itty-router][router] because it was specifically designed for use with Cloudflare Workers. Install it by using the command below.

```bash
npm install itty-router
```

Now we can define our two application routes. The first will be `/links`, which will serve the raw link data we defined in `links.js`. The second will be `*`, which means any other endpoint, and will return our rendered link tree.

```javascript
import {Router} from "itty-router"

const router = Router()

router.get("/links", () => {
    return new Response("GET /links")
})

router.get("*", () => {
    return new Response("GET *")
})

addEventListener("fetch", event => {
    event.respondWith(router.handle(event.request))
})
```

The call to `addEventListener` is standard boilerplate for listening to events in a worker. You can see that we're responding with the result from our router's handler method.

### spin up a development environment

Let's take a minute here to ensure our two routes are working and learn how to start our development server. Run the following command to start a local instance of our worker.

```bash
wrangler dev
```

Now we've got a server running our application at `127.0.0.1:8787`. Try the following endpoints and double check that the correct test responses are coming back.

| url                    | response     |
| ---------------------- | ------------ |
| `127.0.0.1:8787`       | `GET *`      |
| `127.0.0.1:8787/links` | `GET /links` |

You can do this in a browser or with an API tool like [Insomnia][insomnia] or [Postman][postman].

### link json api

The `/links` endpoint should return our links as raw `json` data. We can use the router to handle this endpoint with the `router.get()` method. Inside of the route handler, we create a new response, where we stringify the `links` data and send it back as `json` in the body.

```javascript
import links from "./links"

router.get("/links", () => {
    const response = new Response(JSON.stringify(links), {
        headers: {"content-type": "application/json"},
    })

    return response
})
```

Open a browser and check that `127.0.0.1:8787/links` is returning the `json` data as expected.

### link tree template

All other routes should render our link tree to HTML. I've placed a static HTML template [here][template], which we can fetch from our worker, and then modify the response to include our `links`. Let's start by returning the template from all other routes.

Again we use the `router.get()` method, but specify `*` to indicate all routes. Then we can use the `fetch` API to grab the static HTML template. In addition to `fetch`, Cloudflare Workers provide many other [Runtime APIs][runtime-apis] for you to leverage.

```javascript
router.get("*", async () => {
    const response = await fetch(
        "https://static-links-page.signalnerve.workers.dev",
    )

    return response
})
```

Now is a good time to open a browser and check that `127.0.0.1:8787` is returning the static HTML template.

### modify the link tree template

Another powerful feature of Cloudflare Workers is the ability to modify a request or response as needed based on your application logic. In our case, we'll be using our worker to change the static HTML template in a few different ways.

-   Add a profile image
-   Include our name
-   Insert our links

This can be accomplished using the [HTMLRewriter API][htmlrewriter]. Based on the template, we'll need four rewriters to handle modifying different HTML elements. The `HTMLRewriter` API maps a document query selector to a rewriter class which commits the necessary changes.

Let's start by importing our four rewriters (we'll implement these in the next steps), and map them to the appropriate query selectors. Note how this acts on the response from the HTML template. Feel free to inspect the [HTML template][template] to understand the DOM structure and the relevant element ids.

```javascript
import {
    AvatarRewriter,
    LinkRewriter,
    NameRewriter,
    ProfileRewriter,
} from "./rewriters"

router.get("*", async () => {
    const response = await fetch(
        "https://static-links-page.signalnerve.workers.dev",
    )

    const rewrittenResponse = new HTMLRewriter()
        .on("#profile", new ProfileRewriter())
        .on("#avatar", new AvatarRewriter())
        .on("#name", new NameRewriter())
        .on("#links", new LinkRewriter())
        .transform(response)

    return rewrittenResponse
})
```

Now we'll move on and define each of the rewriters that we'll need in a `rewriters.js` file. Let's start with the `ProfileRewriter`, which should remove the `display: none` style to show the profile section.

```javascript
class ProfileRewriter {
    element(element) {
        element.removeAttribute("style")
    }
}
```

You'll see that a rewriter is a class that can contain three methods, `element`, `comments`, and `text`. In our case, we'll only need the `element` method. We'll use the `removeAttribute` method to get rid of the `style` attribute.

Next we'll update the avatar to include our own photo. Define an `AvatarRewriter` class with an `element` method, but this time we'll use the `setAttribute` method to modify the image source.

```javascript
class AvatarRewriter {
    element(element) {
        const src = "https://github.com/bradgarropy.png"
        element.setAttribute("src", src)
    }
}
```

Then let's insert our name by creating a `NameRewriter` and using the `setInnerContent` method, which replaces the text content of the element.

```javascript
class NameRewriter {
    element(element) {
        element.setInnerContent("Brad Garropy")
    }
}
```

Finally, let's do what we came here for and include our links in the `#links` section of the document. We'll start by defining our `LinkRewriter`, then iterating over the `links` we previously defined in the `links.js` file.

For each link, we'll need to create an `<a>` tag and populate it with the link's name and url. Then we'll use the `append` method to add the markup right before the `element` closing tag.

```javascript
import links from "./links"

class LinkRewriter {
    element(element) {
        links.forEach(link =>
            {
                cont html = `<a href="${link.url}">${link.name}</a>`
                element.append(html, {html: true})
            }
        )
    }
}
```

You may have noticed the additional `{html: true}` argument, this tells the `append` method that the first argument should be treated as HTML instead of plain text, which would get HTML encoded.

### final product

Head over to `127.0.0.1:8787` to see the new HTML response, which has been rewritten by our worker to include our links! It should look something like this.

![link tree][final]

Now you can use `wrangler` to publish your worker to Cloudflare.

```bash
wrangler publish
```

Your worker should be available globally at the url shown in the console, which should look something like this one.

```text
https://link-tree.<SUBDOMAIN>.workers.dev
```

### conclusion

I'm definitely fascinated by [Cloudflare Workers][workers], and I'm still exploring the possibilites of what they can enable. If you build something cool with a worker, share it with me on [Twitter][twitter]!

[workers]: https://workers.cloudflare.com
[dashboard]: https://dash.cloudflare.com
[cli]: https://developers.cloudflare.com/workers/cli-wrangler
[finished]: /images/posts/link-tree.png
[linktree]: https://linktr.ee
[signup]: https://dash.cloudflare.com/sign-up
[pricing]: https://workers.cloudflare.com/#plans
[templates]: https://developers.cloudflare.com/workers/get-started/quickstarts
[worker-template]: https://github.com/cloudflare/worker-template
[router]: https://github.com/kwhitley/itty-router
[insomnia]: https://insomnia.rest
[postman]: https://postman.com
[template]: https://static-links-page.signalnerve.workers.dev
[runtime-apis]: https://developers.cloudflare.com/workers/runtime-apis
[htmlrewriter]: https://developers.cloudflare.com/workers/runtime-apis/html-rewriter
[final]: /images/posts/final.png
[twitter]: https://twitter.com/bradgarropy
[repo]: https://github.com/bradgarropy/cloudflare-link-tree
[github]: https://github.com/bradgarropy
