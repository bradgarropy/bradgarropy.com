import {Head, Html, Main, NextScript} from "next/document"
import Script from "next/script"

const Document = () => {
    return (
        <Html className="overflow-y-scroll">
            <Head />

            <body className="bg-white transition duration-300 dark:bg-black">
                <Main />
                <NextScript />
                <Script src="/theme.js" strategy="beforeInteractive" />
            </body>
        </Html>
    )
}

export default Document
