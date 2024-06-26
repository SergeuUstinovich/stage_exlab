import { UserScheme } from "../../../types/UserType";
import { TokenScheme } from "../../../types/AuthToken";

export interface StateShema {
    user: UserScheme;
    auth: TokenScheme;
}