import {http} from "@bradgarropy/http"
import type {LoaderArgs} from "@remix-run/node"
import {json} from "@remix-run/node"

export const action = async ({request}: LoaderArgs) => {
    const {email} = await request.json()
    const apiKey = process.env.REVUE_API_KEY

    const subscriber = await http.post(
        "https://www.getrevue.co/api/v2/subscribers",
        {
            headers: {
                Authorization: `Token ${apiKey}`,
            },
            body: {
                email,
                double_opt_in: false,
            },
        },
    )

    return json({subscriber})
}
