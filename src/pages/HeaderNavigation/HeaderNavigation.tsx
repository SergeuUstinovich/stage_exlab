import Logo from "../../components/Logo/Logo"
import Navigate from "../../components/Navigate/Navigate"
import style from './HeaderNavigation.module.scss'

function HeaderNavigation() {
    return (
        <div className={style.head}>
          <Logo />
          <Navigate />
        </div>
    )
}

export default HeaderNavigation