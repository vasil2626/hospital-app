import axios from "axios"

export  async function request(url){
    return await axios.get(url)
}