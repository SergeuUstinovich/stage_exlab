import { Button } from "../../ui/Button"
import AvatarNoName from "../../assets/svg/AvatarNoName/AvatarNoName"
import style from './Autorized.module.scss'
import { useCallback, useEffect, useState } from "react"
import AuthModal from "../AuthModal/AuthModal"
import { useMutation } from "@tanstack/react-query"
import { logout } from "../../api/Auth"
import { queryClient } from "../../api/queryClient"


function Autorized() {

    const [isOpenModal, setIsOpenModal] = useState(false)

    const logoutMutation = useMutation({
        mutationFn: () => logout(),
      }, queryClient)

    const logoutClick = useCallback(() => {
        logoutMutation.mutate();
    }, [])

    const auth = false

    const onOpenModal = useCallback(()=> {
        setIsOpenModal(true)
    }, [])

    const onCloseModal = useCallback(()=> {
        setIsOpenModal(false)
    }, [])

    useEffect(() => {
        if(auth) {
            setIsOpenModal(false)
        }
    }, [auth])

    if(auth) {
        return(
            <div className={style.autoriz}>
                <div className={style.wiget}>
                {auth && 
                    <div className={style.username}>QWERTYUIOPASD</div>
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
                {!auth && 
                    <p className={style.descr}>Войти</p>
                }  
            </Button>
            <AuthModal isOpen={isOpenModal} onClose={onCloseModal} lazy hiddenClose/>
        </div>
    )
}

export default Autorized