import * as Sentry from "@sentry/nextjs"

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN

Sentry.init({
    dsn:
        SENTRY_DSN ||
        "https://fc27b583995f4028817500fdca784c5c@o1037846.ingest.sentry.io/6177411",
    tracesSampleRate: 1.0,
})
