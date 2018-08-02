import React from "react"
import Link from "gatsby-link"

// styles
import "./Navigation.css"

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
