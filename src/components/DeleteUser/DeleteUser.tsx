import { useMutation } from "@tanstack/react-query";
import { Button } from "../../ui/Button";
import { deleteUser } from "../../api/Auth";
import { useDispatch, useSelector } from "react-redux";
import { getTokenUser } from "../../providers/StoreProvider/selectors/getTokenUser";
import { queryClient } from "../../api/queryClient";
import { tokenActions } from "../../providers/StoreProvider/slice/tokenSlice";
import style from './DeleteUser.module.scss'

function DeleteUser() {
    const dispatch = useDispatch();
    const token = useSelector(getTokenUser);

    const deleteAccount = useMutation(
        {
            mutationFn: (data: {  token: string | undefined }) =>
                deleteUser(data.token),
            onSuccess: () => {
                dispatch(tokenActions.logout());
                queryClient.invalidateQueries();
            },
          },
          queryClient
    )

    const handleDeleteUser = () => {
        deleteAccount.mutate({token})
    }

    return (
        <Button className={style.deleteUser} onClick={handleDeleteUser}>Удалить аккаунт</Button>
    )
}

export default DeleteUser