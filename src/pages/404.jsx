import React from "react"
import Helmet from "react-helmet"

// components
import FourOhFour from "../components/FourOhFour"

// styles
import "../scss/FourOhFour.scss"


const NotFound = () => {

    return (

        <div>

            <Helmet>
                <title>404</title>
            </Helmet>

            <FourOhFour/>

        </div>

    )

}


// export
export default NotFound
