import Layout from "components/Layout"
import Now from "components/Now"
import SEO from "components/SEO"
import {getNows} from "lib/now"
import PropTypes from "prop-types"

const NowPage = ({nows}) => {
    return (
        <Layout>
            <SEO title="🧭 now" description="" />
            <Now now={nows[0]} older={nows[1]} />
        </Layout>
    )
}

NowPage.propTypes = {
    nows: PropTypes.arrayOf(PropTypes.object).isRequired,
}

const getStaticProps = async () => {
    const nows = await getNows()
    return {props: {nows}}
}

export default NowPage
export {getStaticProps}
