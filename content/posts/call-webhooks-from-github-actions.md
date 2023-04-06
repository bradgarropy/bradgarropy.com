---
title: 🪝 call webhooks from github actions
slug: call-webhooks-from-github-actions
date: "2022-10-06"
topic: coding
tags: []
---

Often I need to _make things to happen_ in a GitHub Action by calling out to an external service. For example, I want to rebuild a website with a [Netlify build hook][netlify-hook] or a [Vercel deploy hook][vercel-hook].

While you could write a bash script that executes a `curl` command, I find it much easier to use the [webhook-action][webhook-action] by [Joel Male][joelwmale]. Include it in a workflow step with the `uses` key, and add inputs under the `with` key to specify details about the HTTP request.

```yaml
jobs:
    webhook:
        name: "☎️ call webhook"
        runs-on: ubuntu-latest
        steps:
            - name: "🎣 webhook"
              uses: joelwmale/webhook-action@2.1.0
              with:
                  url: https://example.com/api/webhook
                  body: '{"name": "Brad"}'
                  headers: '{"authorization": "abc123"}'
```

I did run into one snag though. The `body` and `headers` fields have to be proper `json`, which means the keys and values should be wrapped in double quotes. If you're trying to [use a secret][secrets] in your workflow, they cannot be inside of single quotes. That's because `bash` preserves the literal values of characters within [single quotes][bash-quotes]. In order to get this working, I had to disable [prettier][prettier] and escape the double quotes.

```yaml
# prettier-ignore
headers: "{\"authorization\": \"${{secrets.TOKEN}}\"}"
```

[webhook-action]: https://github.com/joelwmale/webhook-action
[secrets]: https://docs.github.com/en/actions/security-guides/encrypted-secrets#using-encrypted-secrets-in-a-workflow
[netlify-hook]: https://docs.netlify.com/configure-builds/build-hooks
[vercel-hook]: https://vercel.com/docs/concepts/git/deploy-hooks
[joelwmale]: https://github.com/joelwmale
[prettier]: https://prettier.io/
[bash-quotes]: https://www.gnu.org/software/bash/manual/html_node/Single-Quotes.html
