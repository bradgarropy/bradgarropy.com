import type {FC} from "react"

type GoogleAnalyticsProps = {
    measurementId: string
}

const GoogleAnalytics: FC<GoogleAnalyticsProps> = ({measurementId}) => {
    return (
        <>
            <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
            />

            <script
                async
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];

                        function gtag() {
                            dataLayer.push(arguments);
                        }

                        gtag('js', new Date());

                        gtag('config', '${measurementId}', {
                            page_path: window.location.pathname,
                        });
                    `,
                }}
            />
        </>
    )
}

export default GoogleAnalytics
