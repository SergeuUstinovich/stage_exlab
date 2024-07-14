import axios from "axios";
import { validateError, validateErrorForgotEmail } from "../helpers/validateResponse";
import { UserType } from "../types";

const api_url = import.meta.env.MODE === 'development' ? '/api' : import.meta.env.VITE_API_BASE_URL;

export function registerUser(first_name:string, email:string, password1:string, password2:string):Promise<void> {
    return axios.post(`${api_url}/auth/register/`, {
        first_name,
        email,
        password1,
        password2
    })
    .then(() => undefined)
    .catch(validateError)
}
export function verifyEmail(code:string, email: string):Promise<void> {
    return axios.post(`${api_url}/auth/verify-email/`, {
        code,
        email
    })
    .then(() => undefined)
    .catch(validateError)
}

export function login(email: string, password: string) {
    return axios.post(`${api_url}/auth/login/`, {
      email,
      password
    })
    .then(response => {
      const token = response.data.token;
      return token;
    })
    .catch(validateError)
  }

export function logout(token: string | undefined):Promise<void> {
    return axios.post(`${api_url}/auth/logout/`, {}, {
        headers: {
            "Content-Type": 'application/json',
            "Authorization": `Token ${token}`
        }
    })
    .then(() => undefined)
    .catch(validateError)
}

export function User(token:string | undefined):Promise<UserType> {
    return axios.get(`${api_url}/auth/user-details/`, {
        headers: {
            "Content-Type": 'application/json',
            "Authorization": `Token ${token}`
        },
    })
    .then(response => {
        const users =  response.data.message
        return users
    })
    .catch(validateError)
}

export function forgotEmail(email:string):Promise<void> {
    return axios.post(`${api_url}/auth/password-reset/`, {
        email
    })
    .then(() => undefined)
    .catch(validateErrorForgotEmail)
}

export function forgotCode(code:string, new_password1: string, new_password2: string):Promise<void> {
    return axios.post(`${api_url}/auth/password-reset/confirm/`, {
        code,
        new_password1,
        new_password2
    })
    .then(() => undefined)
    .catch(validateErrorForgotEmail)
}

export function googleAuth(response: any) {
    return axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
        headers: {
            Authorization: `Bearer ${response.access_token}`
        }
    })
    .then(response => {
        const email = response.data.email
        const username = response.data.given_name
        const lastname = response.data.family_name
        const id = response.data.sub
        return {
            email,
            username,
            lastname,
            id
        }
    })
    .catch(error => {
        if(error) {
            throw new Error('Ошибка')
        }
    })
}

export function googleLogin(email: string, first_name: string, last_name: string, google_id: string) {
    return axios.post(`${api_url}/auth/google-login/`, {
        email,
        first_name,
        last_name,
        google_id
    })
    .then(response => {
        const token = response.data.token;
        return token;
    })
    .catch(validateError)
}

export function deleteUser(token:string | undefined):Promise<void> {
    return axios.delete(`${api_url}/auth/delete-user/`, {
        headers: {
            "Content-Type": 'application/json',
            "Authorization": `Token ${token}`
        },
    })
    .then(() => undefined)
    .catch(validateError)
}




