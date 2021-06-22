import Link from "@bradgarropy/gatsby-link"
import {GatsbyImage} from "gatsby-plugin-image"
import PropTypes from "prop-types"
import slugify from "slugify"
import styled from "styled-components"
import {link} from "styles/partials"

const TestimonialsWrapper = styled.div`
    display: grid;
    row-gap: 4rem;
`

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

const Name = styled.p`
    margin: 0rem;
    font-family: "Montserrat", sans-serif;
    font-weight: 900;
    font-size: 1.5rem;
    letter-spacing: -0.075rem;
    color: var(--text);
`

const Quote = styled.div`
    ${link}

    p {
        margin: 2rem 0rem 0rem 0rem;
    }
`

const Header = styled.div`
    display: grid;
    grid-auto-flow: column;
    justify-content: start;
    align-items: center;
    column-gap: 1rem;
`

const Photo = styled(GatsbyImage)`
    width: 4rem;
    margin: 0rem;
    border: 3px solid var(--text);
    background-color: var(--text);
`

const Testimonials = ({testimonials}) => {
    return (
        <TestimonialsWrapper>
            {testimonials.map(testimonial => {
                const slug = slugify(testimonial.name.toLowerCase())

                return (
                    <Testimonial
                        id={slug}
                        key={testimonial.name}
                        to={testimonial.profile}
                    >
                        <Header>
                            <Photo
                                image={testimonial.photo}
                                alt={testimonial.name}
                                className="photo"
                                imgClassName="photo"
                            />

                            <Name>{testimonial.name}</Name>
                        </Header>

                        <Quote
                            dangerouslySetInnerHTML={{
                                __html: testimonial.html,
                            }}
                        />
                    </Testimonial>
                )
            })}
        </TestimonialsWrapper>
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
