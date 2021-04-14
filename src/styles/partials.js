const {css} = require("styled-components")

const link = css`
    a:not(.anchor) {
        color: rgba(0, 0, 0, 0.8);
        box-shadow: inset 0 -2px var(--primary);

        :hover {
            box-shadow: inset 0 -25px 0 var(--primary);
        }
    }
`

export {link}
