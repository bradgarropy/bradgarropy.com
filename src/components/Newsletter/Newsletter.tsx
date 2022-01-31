import {post} from "@bradgarropy/http"
import NewsletterStyles from "components/Newsletter/Newsletter.module.css"
import {FC, useState} from "react"
import ButtonStyles from "styles/Button.module.css"
import InputStyles from "styles/Input.module.css"

const Newsletter: FC = () => {
    const [email, setEmail] = useState("")
    const [subscribed, setSubscribed] = useState(false)

    const onChange = event => {
        setEmail(event.target.value)
    }

    const onSubmit = async event => {
        event.preventDefault()

        await post("/api/subscribe", {
            body: {
                email,
            },
        })

        setSubscribed(true)
    }

    return (
        <div>
            <p className={NewsletterStyles.description}>
                💻 side projects | 📰 web dev news | ⚡ tech opinions
            </p>

            <form className={NewsletterStyles.newsletter} onSubmit={onSubmit}>
                <input
                    className={InputStyles.input}
                    placeholder="email@example.com"
                    type="email"
                    name="email"
                    value={email}
                    onChange={onChange}
                />

                <button
                    className={ButtonStyles.button}
                    type="submit"
                    disabled={subscribed}
                >
                    {subscribed ? "💜 subscribed" : "📧 subscribe"}
                </button>
            </form>
        </div>
    )
}

export default Newsletter
