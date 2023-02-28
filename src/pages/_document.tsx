import {Head, Html, Main, NextScript} from "next/document"
import Script from "next/script"

const Document = () => {
    return (
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />

                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="true"
                />

                <link
                    href="https://fonts.googleapis.com/css2?family=Righteous&family=Open+Sans:wght@400;500;600;700;800&family=Montserrat:wght@400;500;600;700;800;900&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <body className="bg-white transition duration-300 dark:bg-black">
                <Main />
                <NextScript />
                <Script src="/theme.js" strategy="beforeInteractive" />
            </body>
        </Html>
    )
}

export default Document
