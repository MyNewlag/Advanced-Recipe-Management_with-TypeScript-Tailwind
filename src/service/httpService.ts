import axios from "axios"
import config from "./config.json";
import type { InitialType } from "../types/recipe";
import type { CommentType } from "../types/comment";

export const apiPath = config.onlinePath


const httpService = (url:string, method:string, data?: InitialType | CommentType | FormData)=>{
    return axios({
        url: apiPath + url ,
        method,
        data
    })
    
}
export default httpService
