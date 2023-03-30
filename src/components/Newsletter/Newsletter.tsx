import {http} from "@bradgarropy/http"
import type {FC} from "react"
import {useState} from "react"

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
            <p className="-mt-12 mb-7">
                💻 side projects | 📰 web dev news | ⚡ tech opinions
            </p>

            <form
                className="grid grid-cols-[1fr_auto] grid-rows-1 items-baseline gap-x-16 max-[600px]:grid-cols-1 max-[600px]:grid-rows-2 max-[600px]:gap-y-4"
                onSubmit={onSubmit}
            >
                <input
                    className="rounded border-3 border-black px-8 py-4 text-base shadow-box placeholder:text-gray-400 focus:border-purple-400 focus:outline-none dark:shadow-box-white"
                    placeholder="email@example.com"
                    type="email"
                    name="email"
                    value={email}
                    onChange={onChange}
                />

                <button
                    className="mb-[5px] inline-block cursor-pointer rounded border-2 border-black bg-purple-500 px-3 py-2 font-heading text-base font-black tracking-normal text-white shadow-box transition duration-300 hover:enabled:shadow-none disabled:cursor-default dark:shadow-box-white"
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
