import SEO from "@bradgarropy/next-seo"
import HireMe from "components/HireMe"
import Layout from "components/Layout"
import {GetStaticProps} from "next"
import {FC} from "react"
import {Markdown} from "types/markdown"
import {getMarkdownBySlug} from "utils/markdown"

type HireMePageProps = {
    hireMe: Markdown
}

const HireMePage: FC<HireMePageProps> = ({hireMe}) => {
    return (
        <Layout>
            <SEO
                title="🤝 let's work together"
                facebook={{
                    image: "https://bradgarropy.com/hire-me.png",
                }}
                twitter={{
                    image: "https://bradgarropy.com/hire-me.png",
                    card: "summary_large_image",
                }}
            />

            <HireMe hireMe={hireMe} testimonials={[]} />
        </Layout>
    )
}

const getStaticProps: GetStaticProps = async () => {
    const hireMe = await getMarkdownBySlug("hire-me")

    return {
        props: {
            hireMe,
        },
    }
}

export default HireMePage
export {getStaticProps}
