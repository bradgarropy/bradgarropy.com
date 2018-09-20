import React from "react"
import Helmet from "react-helmet"

// components
import Layout from "../components/Layout"
import FourOhFour from "../components/FourOhFour"

// styles
import "../scss/FourOhFour.scss"


const NotFound = () => {

    return (

        <Layout>

            <Helmet>
                <title>404</title>
            </Helmet>

            <FourOhFour/>

        </Layout>

    )

}


// export
export default NotFound
