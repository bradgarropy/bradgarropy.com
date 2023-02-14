import {http} from "@bradgarropy/http"
import {FC, useState} from "react"

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
            <p className="-mt-12 mb-7 font-text text-black dark:text-white">
                💻 side projects | 📰 web dev news | ⚡ tech opinions
            </p>

            <form
                className="grid grid-cols-[1fr_auto] grid-rows-1 gap-x-16 items-baseline max-[600px]:grid-cols-1 max-[600px]:grid-rows-2 max-[600px]:gap-y-4"
                onSubmit={onSubmit}
            >
                <input
                    className="py-4 px-8 text-base font-text border-3 border-black shadow-box text-black placeholder:text-gray-400 focus:outline-none focus:border-purple-400 rounded-[0.3rem]"
                    placeholder="email@example.com"
                    type="email"
                    name="email"
                    value={email}
                    onChange={onChange}
                />

                <button
                    className="transition duration-300 inline-block bg-purple-500 text-white py-2 px-3 rounded-[0.3rem] border-2 border-black shadow-box mb-[5px] text-base cursor-pointer font-heading font-black tracking-normal hover:enabled:shadow-none disabled:cursor-default"
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
