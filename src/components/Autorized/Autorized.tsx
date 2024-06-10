import { Button } from "../../utils/Button"
import AvatarNoName from "../../assets/svg/AvatarNoName/AvatarNoName"
import style from './Autorized.module.scss'
import { useCallback, useState } from "react"
import Modal from "../../utils/Modal/Modal"

function Autorized() {

    const [isOpenModal, setIsOpenModal] = useState(false)

    const auth = false

    const onToggleModal = useCallback(()=> {
        setIsOpenModal((prev) => !prev)
    }, [isOpenModal])

    return(
        <div className={style.autoriz}>
            <div>
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
            <Modal isOpen={isOpenModal} onClose={onToggleModal}>
                Привет, тут скоро будет Вход/Регистрация, а сейчас до свидания!
            </Modal>
        </div>
    )
}

export default Autorized