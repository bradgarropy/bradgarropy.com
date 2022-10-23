import {http} from "@bradgarropy/http"
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

        await http.post("/api/subscribe", {
            body: {
                email,
            },
        })

        setSubscribed(true)
    }

    return (
        <div>
            <p className="-mt-12">
                💻 side projects | 📰 web dev news | ⚡ tech opinions
            </p>

            <form
                className="grid grid-cols-newsletter grid-rows-1 gap-x-16 items-baseline max-[600px]:grid-cols-1 max-[600px]:grid-rows-2 max-[600px]:gap-y-4"
                onSubmit={onSubmit}
            >
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
