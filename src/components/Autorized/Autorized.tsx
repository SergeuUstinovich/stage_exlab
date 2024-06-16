import { Button } from "../../utils/Button"
import AvatarNoName from "../../assets/svg/AvatarNoName/AvatarNoName"
import style from './Autorized.module.scss'
import { useCallback, useState } from "react"
import AuthModal from "../AuthModal/AuthModal"


function Autorized() {

    const [isOpenModal, setIsOpenModal] = useState(false)

    const auth = true

    const onToggleModal = useCallback(()=> {
        setIsOpenModal((prev) => !prev)
    }, [])

    return(
        <div className={style.autoriz}>
            <div className={style.wiget}>
            {!auth && 
                <div className={style.username}>QWERTYUIOPASD</div>
            }
            </div>
            <Button className={style.avatar} onClick={onToggleModal}>
                <AvatarNoName className={style.icon} />
                {auth && 
                    <p className={style.descr}>Войти</p>
                }  
            </Button>
            <AuthModal isOpen={isOpenModal} onClose={onToggleModal} lazy hiddenClose/>
        </div>
    )
}

export default Autorized