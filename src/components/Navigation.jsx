import React from "react"
import {Link} from "gatsby"

// styles
import "../scss/Navigation.scss"

// components
import Logo from "./Logo"


const Navigation = () => {

    return (

        <div className="navigation">

            <Link to="/">
                <Logo/>
            </Link>

        </div>

    )

}


// export
export default Navigation
