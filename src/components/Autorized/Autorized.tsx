import { Button } from "../../ui/Button"
import AvatarNoName from "../../assets/svg/AvatarNoName/AvatarNoName"
import style from './Autorized.module.scss'
import { useCallback, useEffect, useState } from "react"
import AuthModal from "../AuthModal/AuthModal"
import { useMutation, useQuery } from "@tanstack/react-query"
import { User, logout } from "../../api/Auth"
import { queryClient } from "../../api/queryClient"
import { useDispatch, useSelector } from "react-redux"
import { getTokenUser } from "../../providers/StoreProvider/selectors/getTokenUser"
import { tokenActions } from "../../providers/StoreProvider/slice/tokenSlice"
import { userActions } from "../../providers/StoreProvider"
import { getUserAuthData } from "../../providers/StoreProvider/selectors/getUserAuth"



function Autorized() {
    const dispatch = useDispatch()
    const token = useSelector(getTokenUser)
    const [isOpenModal, setIsOpenModal] = useState(false)
    const auth = useSelector(getUserAuthData)
   
    const logoutMutation = useMutation({
        mutationFn: (data: string | undefined) => logout(data),
        onSuccess: () => {
            dispatch(tokenActions.logout())
        }
    }, queryClient)


    const meUsers = useQuery({
        queryFn: () => User(token),
        queryKey: ['user'],
        retry: 0
    }, queryClient)

    useEffect(() => {
        dispatch(userActions.setUserAuth(meUsers.data))
    }, [meUsers.data])

    const logoutClick = () => {
        logoutMutation.mutate(token);
    }

    const onOpenModal = useCallback(()=> {
        setIsOpenModal(true)
    }, [])

    const onCloseModal = useCallback(()=> {
        setIsOpenModal(false)
    }, [])

    useEffect(() => {
        if(token) {
            setIsOpenModal(false)
        }
    }, [token])

    if(token) {
        return(
            <div className={style.autoriz}>
                <div className={style.wiget}>
                {auth && 
                    <div className={style.username}>{auth.first_name}</div>
                }
                </div>
                <div className={style.avatar}>
                    <Button onClick={logoutClick}>
                        <AvatarNoName className={style.icon} />
                    </Button>
                </div>
                 
            </div> 
        )
    }

    return(
        <div className={style.autoriz}>
            <div className={style.wiget}>
            </div>
            <Button className={style.avatar} onClick={onOpenModal}>
                <AvatarNoName className={style.icon} />
                <p className={style.descr}>Войти</p> 
            </Button>
            <AuthModal isOpen={isOpenModal} onClose={onCloseModal} lazy hiddenClose/>
        </div>
    )
}

export default Autorized