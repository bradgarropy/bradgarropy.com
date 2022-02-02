import * as Sentry from "@sentry/nextjs"
import NextErrorComponent from "next/error"

const MyError = ({statusCode, hasGetInitialPropsRun, err}) => {
    if (!hasGetInitialPropsRun && err) {
        Sentry.captureException(err)
    }

    return <NextErrorComponent statusCode={statusCode} />
}

MyError.getInitialProps = async context => {
    const errorInitialProps = await NextErrorComponent.getInitialProps(context)
    const {res, err, asPath} = context

    errorInitialProps.hasGetInitialPropsRun = true

    if (res?.statusCode === 404) {
        return errorInitialProps
    }

    if (err) {
        Sentry.captureException(err)
        await Sentry.flush(2000)

        return errorInitialProps
    }

    Sentry.captureException(
        new Error(`_error.js getInitialProps missing data at path: ${asPath}`),
    )

    await Sentry.flush(2000)

    return errorInitialProps
}

export default MyError
