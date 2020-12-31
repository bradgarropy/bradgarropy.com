import Layout from "components/Layout"
import Now from "components/Now"
import SEO from "components/SEO"
import {getNewerNow, getNow, getNows, getOlderNow} from "lib/now"
import PropTypes from "prop-types"

const NowTemplate = ({now, newer = null, older = null}) => {
    return (
        <Layout>
            <SEO title={now.frontmatter.title} description="" />
            <Now now={now} newer={newer} older={older} />
        </Layout>
    )
}

NowTemplate.propTypes = {
    now: PropTypes.object.isRequired,
    newer: PropTypes.object,
    older: PropTypes.object,
}

const getStaticPaths = async () => {
    const nows = await getNows()

    const paths = nows.map(now => {
        const path = {params: {slug: now.frontmatter.date}}
        return path
    })

    return {
        paths,
        fallback: false,
    }
}

const getStaticProps = async ({params}) => {
    const now = await getNow(params.slug)
    const newer = await getNewerNow(params.slug)
    const older = await getOlderNow(params.slug)

    return {props: {now, newer, older}}
}

export default NowTemplate
export {getStaticPaths, getStaticProps}
