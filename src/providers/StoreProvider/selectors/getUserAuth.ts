import { StateShema } from "../config/StateScheme";

export const getUserAuthData = (state: StateShema) => state.user.authData;