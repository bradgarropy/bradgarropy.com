import React from "react"
import Link from "gatsby-link"

// styles
import "./Navigation.css"


class Navigation extends React.Component {

    constructor(props) {

        super(props)

        this.state = {

        }

    }

    render() {

        return (

            <div className="navigation">

                <Link to="/">Home</Link>
                <Link to="/posts">Posts</Link>

            </div>

        )

    }

}


Navigation.propTypes = {

}


Navigation.defaultProps = {

}


export default Navigation
