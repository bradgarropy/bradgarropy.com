---
title: 🔒 securing webhooks
slug: securing-webhooks
date: "2022-10-06"
topic: coding
---

The thing about webhooks is that they need to be accessible from everywhere. But what if you want to secure them so that only authorized callers can execute them? We can lock down webhooks using an [HTTP Authorization header][authorization-header] and a server side secret.

In the example below, I'm using a [Vercel serverless function][vercel-functions] as a webhook, although the same can be accomplished on any other platform. The first thing you'll have to do is set up a server side secret. This acts like a password that the caller must provide in order to execute the webhook. Create an environment variable under the _Settings_ tab of your [Vercel][vercel] project to store the secret on the server.

![vercel environment variables][vercel-environment-variables]

We'll expect the caller to send the secret in the `authorization` header. Then our webhook will grab the secret from request headers, and compare it against the server side secret stored in `process.env.TOKEN`. If the secret matches we execute the webhook and return a `200` status. If the secret does not match we return a `401` unauthorized error.

```typescript
import {VercelApiHandler} from "@vercel/node"

const handler: VercelApiHandler = (request, response) => {
    if (request.headers.authorization !== process.env.TOKEN) {
        return response.status(400).send("Unauthorized")
    }

    return response.status(200).send("Authorized")
}

export default handler
```

Once the serverless function is deployed, or running locally in my case, we can test it out using a REST client like [Insomnia][insomnia]. In the example below I'm sending the `authorization` header from the client that matches the server secret and getting an _Authorized_ response.

![authorized webhook][authorized-webhook]

In this example no `authorization` header is sent and the webhook is correctly responding with a `401` status to indicate that the caller is unauthorized to execute the hook.

![unauthorized webhook][unauthorized-webhook]

Now you can deploy webhooks without worrying about unauthorized access!

[vercel-functions]: https://vercel.com/docs/concepts/functions/serverless-functions
[authorization-header]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization
[password-generator]: https://www.lastpass.com/features/password-generator
[vercel-environment-variables]: /posts/vercel-environment-variables.png
[authorized-webhook]: /posts/authorized-webhook.png
[unauthorized-webhook]: /posts/unauthorized-webhook.png
[insomnia]: https://insomnia.rest
[vercel]: https://vercel.com
