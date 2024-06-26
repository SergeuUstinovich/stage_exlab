export interface UserType {
    first_name: string,
    last_name: string,
    email: string,
    phone: string,
    date_joined: string,
    about_me: string,
    city: string,
    is_active: boolean
}

export interface UserScheme {
    authData?: UserType
}