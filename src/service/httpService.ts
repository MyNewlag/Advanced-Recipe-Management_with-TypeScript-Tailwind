import axios from "axios"
import config from "./config.json";
import type { InitialType } from "../types/recipe";

export const apiPath = config.onlinePath


const httpService = (url:string, method:string, data?: InitialType | FormData)=>{
    console.log(apiPath + url)
    return axios({
        url: apiPath + url ,
        method,
        data
    })
    
}
export default httpService
