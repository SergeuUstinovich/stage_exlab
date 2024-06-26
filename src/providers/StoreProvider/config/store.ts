import { ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { StateShema } from "./StateScheme";
import { userReducer } from "../slice/userSlice";
import { tokenReducer } from "../slice/tokenSlice";


export function createReduxStore(initialState?: StateShema) {

    const rootReducer: ReducersMapObject<StateShema> = {
        user: userReducer,
        auth: tokenReducer,
    }

    return configureStore({
        reducer: rootReducer,
        preloadedState: initialState,
    })
}