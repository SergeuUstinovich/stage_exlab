import Logo from "../../components/Logo/Logo"
import Navigate from "../../components/Navigate/Navigate"
import { Button } from "../../utils/Button"
import style from './HeaderNavigation.module.scss'

function HeaderNavigation() {
    return (
        <div className={style.head}>
          <Logo />
          <Navigate />
          <Button>Т</Button>
        </div>
    )
}

export default HeaderNavigation