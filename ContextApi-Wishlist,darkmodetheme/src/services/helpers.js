import { BASE_URL } from "./constants.js";
import axios from 'axios'

const getAllData = async(endpoint)=>{
    try {
        const res = await axios(`${BASE_URL}${endpoint}`)
        return res.data
    } catch (error) {
        console.log(error);
    }
}

export { getAllData}