const http = require("@bradgarropy/http")

const handler = async req => {
    const apiKey = process.env.REVUE_API_KEY
    const body = JSON.parse(req.body)

    const subscriber = await http.post(
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

    const res = {
        statusCode: 200,
        body: JSON.stringify(subscriber),
    }

    return res
}

module.exports = {handler}
