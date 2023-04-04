import "~/styles/global.css"

import GoogleAnalytics from "@bradgarropy/next-google-analytics"
import type {AppProps} from "next/app"

import {AppProvider} from "~/context/App"
import {ThemeProvider} from "~/context/Theme"

const App = ({Component, pageProps}: AppProps) => {
    return (
        <>
            <GoogleAnalytics
                measurementId={
                    process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID
                }
            />

            <ThemeProvider>
                <AppProvider>
                    <Component {...pageProps} />
                </AppProvider>
            </ThemeProvider>
        </>
    )
}

export default App
