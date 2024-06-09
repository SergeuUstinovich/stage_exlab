import { Button } from "../../utils/Button"
import AvatarNoName from "../../assets/svg/AvatarNoName/AvatarNoName"
import style from './Autorized.module.scss'
import { useState } from "react"
import Modal from "../../utils/Modal/Modal"

function Autorized() {

    const [isOpen, setIsOpen] = useState(false)

    return(
        <div>
            <Button className={style.avatar} onClick={()=> setIsOpen(true)}>
                <AvatarNoName className={style.icon} />
                <p>Войти</p>
            </Button>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                Привет, тут скоро будет Вход/Регистрация, а сейчас до свидания!
            </Modal>
        </div>
    )
}

export default Autorized