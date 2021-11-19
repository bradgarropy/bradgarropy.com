const FormData = require("form-data")
const fetch = require("node-fetch")

const handler = async req => {
    const apiKey = process.env.REVUE_API_KEY
    const body = JSON.parse(req.body)

    const form = new FormData()
    form.append("email", body.email)
    form.append("double_opt_in", "false")

    const response = await fetch("https://www.getrevue.co/api/v2/subscribers", {
        method: "POST",
        headers: {
            Authorization: `Token ${apiKey}`,
        },
        body: form,
    })

    const json = await response.json()

    const res = {
        statusCode: 200,
        body: JSON.stringify(json),
    }

    return res
}

module.exports = {handler}
