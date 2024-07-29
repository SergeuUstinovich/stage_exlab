import axios from "axios";
import {
  validateError,
  validateErrorConfirm,
  validateErrorConfirmPass,
  validateErrorForgotEmail,
} from "../helpers/validateResponse";
import { UserType } from "../types";

const api_url =
  import.meta.env.MODE === "development"
    ? "/api"
    : import.meta.env.VITE_API_BASE_URL;

export function registerUser(
  first_name: string,
  email: string,
  password1: string,
  password2: string
): Promise<void> {
  return fetch(`${api_url}/auth/register/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ first_name, email, password1, password2 }),
  })
    .then(validateError)
    .then(() => undefined);
}
export function verifyEmail(code: string, email: string) {
  return fetch(`${api_url}/auth/verify-email/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ code, email }),
  })
    .then(validateError)
    .then(async (response) => {
      const obj = await response.json();
      const token = obj.token;
      return token;
    });
}

export function login(email: string, password: string) {
  return fetch(`${api_url}/auth/login/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then(validateError)
    .then(async (response) => {
      const obj = await response.json();
      const token = obj.token;
      return token;
    });
}

export function logout(token: string | undefined): Promise<void> {
  return fetch(`${api_url}/auth/logout/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    },
  })
    .then(validateError)
    .then(() => undefined);
}

export function User(token: string | undefined): Promise<UserType> {
  return fetch(`${api_url}/auth/user-details/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    },
  })
    .then(validateError)
    .then(async (response) => {
      const obj = await response.json();
      const users = obj.message;
      return users;
    });
}

export function forgotEmail(email: string): Promise<void> {
  return fetch(`${api_url}/auth/password-reset/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  })
    .then(validateErrorConfirm)
    .then(() => undefined);
}

export function forgotCode(
  code: string,
  new_password1: string,
  new_password2: string,
  email: string
): Promise<void> {
  return fetch(`${api_url}/auth/password-reset/confirm/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ code, new_password1, new_password2, email }),
  })
    .then(validateErrorConfirmPass)
    .then(() => undefined);
}

export function googleAuth(response: any) {
  return axios
    .get("https://www.googleapis.com/oauth2/v3/userinfo", {
      headers: {
        Authorization: `Bearer ${response.access_token}`,
      },
    })
    .then((response) => {
      const email = response.data.email;
      const username = response.data.given_name;
      const lastname = response.data.family_name;
      const id = response.data.sub;
      return {
        email,
        username,
        lastname,
        id,
      };
    })
    .catch((error) => {
      if (error) {
        throw new Error("Ошибка");
      }
    });
}

export function googleLogin(
  email: string,
  first_name: string,
  last_name: string,
  google_id: string
) {
  return fetch(`${api_url}/auth/google-login/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, first_name, last_name, google_id }),
  })
    .then(validateError)
    .then(async (response) => {
      const obj = await response.json();
      const token = obj.token;
      return token;
    });
}

export function deleteUser(token: string | undefined): Promise<void> {
  return fetch(`${api_url}/auth/delete-user/`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    },
  })
    .then(validateError)
    .then(() => undefined);
}
