import {Link as GatsbyLink} from "gatsby"
import PropTypes from "prop-types"

const Link = ({to, children, ...props}) => {
    if (to.startsWith("/")) {
        return (
            <GatsbyLink to={to} {...props}>
                {children}
            </GatsbyLink>
        )
    }

    return (
        <a href={to} target="_blank" rel="noopener noreferrer" {...props}>
            {children}
        </a>
    )
}

Link.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node,
}

export default Link
