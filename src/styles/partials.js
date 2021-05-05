const {css} = require("styled-components")

const link = css`
    a:not(.anchor, .gatsby-resp-image-link) {
        color: var(--text);
        box-shadow: inset 0 -2px var(--primary);

        :hover {
            color: var(--text);
            box-shadow: inset 0 -25px 0 var(--primary);
        }
    }
`

export {link}
