import * as Sentry from "@sentry/nextjs"

console.log(process.env.NEXT_PUBLIC_SENTRY_DSN)

Sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
    tracesSampleRate: 1.0,
    debug: true,
})
