import { baseURL } from "./baseURL"
import { commonAPI } from "./commonApi"



// api to add user details
export const registerApi=async(user)=>{
    return await commonAPI('POST',`${baseURL}/register`,user,"")
}

export const loginApi=async(user)=>{
    return await commonAPI('POST',`${baseURL}/login`,user,"")
}