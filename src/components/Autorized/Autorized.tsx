import { Button } from "../../utils/Button"
import AvatarNoName from "../AvatarNoName/AvatarNoName"
import style from './Autorized.module.scss'

function Autorized() {
    return(
        <div>
            <Button className={style.avatar}>
                <AvatarNoName className={style.icon} />
                <p>Войти</p>
            </Button>
        </div>
    )
}

export default Autorized