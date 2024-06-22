import { errorMessage } from "../helpers/errorMessage"

export function registerUser(first_name:string, email:string, password1:string, password2:string):Promise<void | object | undefined> {
    return fetch("api/auth/register/", {
        method: "POST",
        headers: {
            "Content-Type": 'application/json',
        },
        body: JSON.stringify({first_name, email, password1, password2})
    }).then( async (response) => {
        return await errorMessage(response)
    }).catch((error) => {
        console.log(error)
    })
}

export function verifyEmail(code:string):Promise<void | object | undefined> {
    return fetch('api/auth/verify-email/', {
        method: "POST",
        headers: {
            "Content-Type": 'application/json',
        },
        body: JSON.stringify({code})
    }).then( async (response) => {
        return await errorMessage(response)
    }).catch((error) => {
        console.log(error)
    })
}

export function login(email:string, password:string):Promise<void | object | undefined> {
    return fetch("api/auth/login/", {
        method: "POST",
        headers: {
            "Content-Type": 'application/json',
        },
        body: JSON.stringify({email, password})
    }).then( async (response) => {
        return await errorMessage(response)
    }).catch((error) => {
        console.log(error)
    })
}

export function logout():Promise<void | object | undefined> {
    return fetch("api/auth/login/", {
        method: "POST",
        headers: {
            "Content-Type": 'application/json',
        },
        body: JSON.stringify({})
    }).then( async (response) => {
        return await errorMessage(response)
    }).catch((error) => {
        console.log(error)
    })
}
