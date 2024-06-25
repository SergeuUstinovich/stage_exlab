import { validateResponse } from "../helpers/validateResponse";

export function registerUser(first_name:string, email:string, password1:string, password2:string):Promise<void | object | undefined> {
    return fetch("api/auth/register/", {
        method: "POST",
        headers: {
            "Content-Type": 'application/json',
        },
        body: JSON.stringify({first_name, email, password1, password2})
    })
    .then(validateResponse)
    .then(() => undefined);
}

export function verifyEmail(code:string):Promise<void | object | undefined> {
    return fetch('api/auth/verify-email/', {
        method: "POST",
        headers: {
            "Content-Type": 'application/json',
        },
        body: JSON.stringify({code})
    })
    .then(validateResponse)
    .then(() => undefined);
}

export function login(email:string, password:string):Promise<void | object | undefined> {
    return fetch("api/auth/login/", {
        method: "POST",
        headers: {
            "Content-Type": 'application/json',
        },
        body: JSON.stringify({email, password})
    })
    .then(validateResponse)
    .then(() => undefined);
}

export function logout():Promise<void | object | undefined> {
    return fetch("api/auth/logout/", {
        method: "POST",
        headers: {
            "Content-Type": 'application/json',
        },
        body: JSON.stringify({})
    })
    .then(validateResponse)
    .then(() => undefined);
}
