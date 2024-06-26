import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserScheme, UserType } from "../../../types";

const initialState: UserScheme = {}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserAuth:(state, action: PayloadAction<UserType | undefined>) => {
            state.authData = action.payload
        }
    }
})

export const {actions: userActions} = userSlice
export const {reducer: userReducer} = userSlice