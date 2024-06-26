import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { TokenScheme } from "../../../types"

const initialState: TokenScheme = {
    token: undefined
}

export const tokenSlice = createSlice({
    name: 'token',
    initialState,
    reducers: {
        initAuthData: (state) => {
            const user = localStorage.getItem('authToken');
            if (user) {
                state.token = user;
            }
        },
        logout: (state) => {
            state.token = undefined
            localStorage.removeItem('authToken');
        }
    }
})

export const {actions: tokenActions} = tokenSlice
export const {reducer: tokenReducer} = tokenSlice