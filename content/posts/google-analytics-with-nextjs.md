---
title: 📊 google analytics with next.js
slug: google-analytics-with-nextjs
date: "2022-02-09"
topic:
    name: coding
    icon: 💻
---

![create property][ga-create-property]

![data stream][ga-data-stream]

![website][ga-website]

![measurement id][ga-measurement-id]

```typescript
const App = ({Component, pageProps}) => {
    return (
        <>
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
            />

            <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${measurementId}');
                `}
            </Script>

            <Component {...pageProps} />
        </>
    )
}
```

```typescript
<GoogleAnalytics measurementId="G-XXXXXXXXXX" />
```

```typescript
import GoogleAnalytics from "@bradgarropy/next-google-analytics"

const App = ({Component, pageProps}) => {
    return (
        <>
            <GoogleAnalytics measurementId="G-XXXXXXXXXX" />
            <Component {...pageProps} />
        </>
    )
}
```

[@bradgarropy/next-google-analytics][next-google-analytics]

[next-google-analytics]: https://github.com/bradgarropy/next-google-analytics
[google-analytics]: https://analytics.google.com
[next]: https://nextjs.org
[ga-create-property]: /images/posts/ga-create-property.png
[ga-data-stream]: /images/posts/ga-data-stream.png
[ga-website]: /images/posts/ga-website.png
[ga-measurement-id]: /images/posts/ga-measurement-id.png
