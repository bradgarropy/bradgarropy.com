---
title: ⚡ serverless functions with netlify cli
slug: serverless-functions-with-netlify-cli
date: "2020-04-28"
topic: coding
---

The other day I read a tweet from [James Quick][jqq] which asked a question that I definitely had some input on.

https://twitter.com/jamesqquick/status/1254817585633333248

He's right, `netlify dev` is the best way to run your serverless functions locally. But did you know that the [Netlify CLI][cli] can scaffold out functions for you based on a bunch of different templates? Let me walk you through it.

First, you're going to want to install the command line tool globally. And if that's not your style, you can always run it with `npx`.

```bash
npm install --global netlify-cli
```

Next, create a directory for your project, I called mine `bg-serverless`, and create a `netlify.toml` file in there. The `functions` property tells Netlify where to find and create your serverless functions.

```toml
[build]
    functions = "functions"
```

Now let's use Netlify CLI to create a serverless function for us. Enter the command below and notice how you are prompted to choose from one of many different [serverless function templates][templates]!

```bash
netlify function:create hello
```

You'll see that Netlify created a `hello` directory inside of the `functions` folder, containing a handler function which returns a response object. This is the most basic of serverless functions, but Netlify also has templates for a [GraphQL][graphql] server, [Stripe][stripe] payments, [FaunaDB][fauna] operations, and [Sanity][sanity] integrations!

Run `netlify dev` to serve your functions locally at `/.netlify/functions/hello`. But typing this URL sucks, so let's define a redirect in `netlify.toml` to simplify the endpoint.

```toml
[[redirects]]
    from = "/api/*"
    to = "/.netlify/functions/:splat"
    status = 200
```

Now we can hit `/api/hello` instead of the ugly default Netlify URL.

Let's make this site live! Use the Netlify CLI one more time to create a site, and deploy your serverless functions.

```bash
netlify deploy --prod
```

If you learn best from watching instead of reading, here is the video version of this post.

https://youtu.be/jEi22V1A2HM

Now you're all set to build some awesome things using serverless functions! Hit me up [@bradgarropy][twitter] on Twitter and show me what you create!

[jqq]: https://twitter.com/jamesqquick
[cli]: https://cli.netlify.com
[templates]: https://github.com/netlify/cli/tree/master/src/functions-templates/js
[graphql]: https://www.apollographql.com
[stripe]: https://stripe.com
[fauna]: https://fauna.com
[sanity]: https://www.sanity.io
[twitter]: https://twitter.com/bradgarropy
