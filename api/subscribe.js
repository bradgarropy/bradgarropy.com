const http = require("@bradgarropy/http")

const handler = async (req, res) => {
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

    res.status(200).send(subscriber)
}

module.exports = handler
