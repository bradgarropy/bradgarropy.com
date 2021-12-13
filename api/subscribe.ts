import {post} from "@bradgarropy/http"
import {VercelRequest, VercelResponse} from "@vercel/node"

const handler = async (req: VercelRequest, res: VercelResponse) => {
    const apiKey = process.env.REVUE_API_KEY
    const body = JSON.parse(req.body)

    const subscriber = await post(
        "https://www.getrevue.co/api/v2/subscribers",
        {
            headers: {
                Authorization: `Token ${apiKey}`,
            },
            body: {
                email: body.email,
                double_opt_in: false,
            },
        },
    )

    res.status(200).json(subscriber)
}

export default handler
