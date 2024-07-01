import { validateResponse, validateResponseForgotEmail } from "../helpers/validateResponse";
import { UserType } from "../types";

const api_url = import.meta.env.MODE === 'development' ? '/api' : import.meta.env.VITE_API_BASE_URL;

export function registerUser(first_name:string, email:string, password1:string, password2:string):Promise<void> {
    return fetch(`${api_url}/auth/register/`, {
        method: "POST",
        headers: {
            "Content-Type": 'application/json',
        },
        body: JSON.stringify({first_name, email, password1, password2})
    })
    .then(validateResponse)
    .then(() => undefined);
}

export function verifyEmail(code:string):Promise<void> {
    return fetch(`${api_url}/auth/verify-email/`, {
        method: "POST",
        headers: {
            "Content-Type": 'application/json',
        },
        body: JSON.stringify({code})
    })
    .then(validateResponse)
    .then(() => undefined);
}

export function login(email:string, password:string):Promise<string> {
    return fetch(`${api_url}/auth/login/`, {
        method: "POST",
        headers: {
            "Content-Type": 'application/json',
        },
        body: JSON.stringify({email, password})
    })
    .then(validateResponse)
    .then( async (response) => {
        const obj = await response.json()
        const token = obj.token
        return token
    });
}

export function logout(token: string | undefined):Promise<void> {
    return fetch(`${api_url}/auth/logout/`, {
        method: "POST",
        headers: {
            "Content-Type": 'application/json',
            "Authorization": `Token ${token}`
        },
    })
    .then(validateResponse)
    .then(() => undefined);
}

export function User(token:string | undefined):Promise<UserType> {
    return fetch(`${api_url}/auth/user-details/`, {
        method: "GET",
        headers: {
            "Content-Type": 'application/json',
            "Authorization": `Token ${token}`
        },
    })
    .then(validateResponse)
    .then( async (response) => {
        const obj = await response.json()
        const users = obj.message
        return users
    } );
}

export function forgotEmail(email:string):Promise<void> {
    return fetch(`${api_url}/auth/password-reset/`, {
        method: "POST",
        headers: {
            "Content-Type": 'application/json',
        },
        body: JSON.stringify({email})
    })
    .then(validateResponseForgotEmail)
    .then(() => undefined);
}

export function forgotCode(code:string, new_password1: string, new_password2: string):Promise<void> {
    return fetch('api/auth/password-reset/confirm/', {
        method: "POST",
        headers: {
            "Content-Type": 'application/json',
        },
        body: JSON.stringify({code, new_password1, new_password2})
    })
    .then(validateResponseForgotEmail)
    .then(() => undefined);
}




