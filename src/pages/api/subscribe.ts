import {http} from "@bradgarropy/http"
import type {NextApiHandler} from "next"

const handler: NextApiHandler = async (req, res) => {
    const apiKey = process.env.LOOPS_API_KEY

    const subscriber = await http.post(
        "https://app.loops.so/api/v1/contacts/create",
        {
            headers: {
                Authorization: `Bearer ${apiKey}`,
            },
            body: {
                email: req.body.email,
                source: "bradgarropy.com",
            },
        },
    )

    res.status(200).json(subscriber)
}

export default handler
