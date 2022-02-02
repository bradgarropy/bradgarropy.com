import {post} from "@bradgarropy/http"
import {withSentry} from "@sentry/nextjs"
import {NextApiHandler} from "next"

console.log(process.env.NEXT_PUBLIC_SENTRY_DSN)

const handler: NextApiHandler = async (req, res) => {
    throw new Error("Sentry Backend Error | Subscribe")

    // const apiKey = process.env.REVUE_API_KEY

    // const subscriber = await post(
    //     "https://www.getrevue.co/api/v2/subscribers",
    //     {
    //         headers: {
    //             Authorization: `Token ${apiKey}`,
    //         },
    //         body: {
    //             email: req.body.email,
    //             double_opt_in: false,
    //         },
    //     },
    // )

    // res.status(200).json(subscriber)
}

export default withSentry(handler)
