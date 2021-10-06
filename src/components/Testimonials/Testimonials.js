import Link from "@bradgarropy/gatsby-link"
import {GatsbyImage} from "gatsby-plugin-image"
import PropTypes from "prop-types"
import slugify from "slugify"
import styled from "styled-components"
import {link} from "styles/partials"

import * as styles from "./Testimonials.module.css"

const Testimonial = styled(Link)`
    padding: 2rem;
    border-radius: 0.3rem;
    border: 3px solid var(--text);
    box-shadow: 3px 3px 0 var(--text);
    display: grid;
    color: var(--text);
    max-width: 32rem;

    :hover {
        color: var(--text);
        box-shadow: none;
    }

    .photo {
        border-radius: 100%;
    }
`

const Quote = styled.div`
    ${link}

    p {
        margin: 2rem 0rem 0rem 0rem;
    }
`

const Photo = styled(GatsbyImage)`
    width: 4rem;
    margin: 0rem;
    border: 3px solid var(--text);
    background-color: var(--text);
`

const Testimonials = ({testimonials}) => {
    return (
        <div className={styles.testimonials}>
            {testimonials.map(testimonial => {
                const slug = slugify(testimonial.name.toLowerCase())

                return (
                    <Testimonial
                        id={slug}
                        key={testimonial.name}
                        to={testimonial.profile}
                    >
                        <div className={styles.header}>
                            <Photo
                                image={testimonial.photo}
                                alt={testimonial.name}
                                className="photo"
                                imgClassName="photo"
                            />

                            <p className={styles.name}>{testimonial.name}</p>
                        </div>

                        <Quote
                            dangerouslySetInnerHTML={{
                                __html: testimonial.html,
                            }}
                        />
                    </Testimonial>
                )
            })}
        </div>
    )
}

Testimonials.propTypes = {
    testimonials: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            profile: PropTypes.string.isRequired,
            photo: PropTypes.object.isRequired,
            html: PropTypes.string.isRequired,
        }),
    ).isRequired,
}

export default Testimonials
