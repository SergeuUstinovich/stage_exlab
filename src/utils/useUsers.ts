import { useQuery } from "@tanstack/react-query";
import { UserType } from "../types";
import { queryClient } from "../api/queryClient";
import { User } from "../api/Auth";

export interface useUser {
    data: UserType | undefined;
    isError: boolean;
    isLoading: boolean;
}

// export function useUsers(token: string | undefined): useUser {
//     const { data, isError, isLoading } = useQuery({
//         queryFn: () => User(token),
//         queryKey: ['user'],
//         retry: 0
//     }, queryClient)
//     return { data, isError, isLoading }
// }