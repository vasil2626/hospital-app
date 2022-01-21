import axios from "axios"

export function request(url, method = "get", responseData, success, error) {

    const options = {
        method: `${method}`,
        url: url,
        data: responseData
    }

    axios(options)
        .then(({ data }) => {
            data.error ? error(data.message) : success(data.message)
        })
        .catch(({ message }) => {
            error(message)
        })

}