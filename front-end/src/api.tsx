import { IAdmin } from "./interface/IAdmin"

export function CREATE_USER (body : IAdmin) : RequestInit {
    return {
        method : "POST",
        body : JSON.stringify(body),
        headers : {
            "Content-Type" : "application/json"
        }
    }
}