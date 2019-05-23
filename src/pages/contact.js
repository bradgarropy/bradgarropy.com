import React from "react"
import Layout from "../components/Layout"
import Meta from "../components/SEO/Meta"
import Facebook from "../components/SEO/Facebook"
import Twitter from "../components/SEO/Twitter"

const ContactPage = () => {
    return (
        <Layout>
            <Meta title="contact"/>
            <Facebook/>
            <Twitter/>

            <p>contact.</p>
        </Layout>
    )
}

export default ContactPage
