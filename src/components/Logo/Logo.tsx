import { Link } from "react-router-dom"
import style from './Logo.module.scss'

function Logo() {
    return (
        <Link to={'/'}>
            <img
                className={style.logo}
                src="../src/assets/img/Logo.png"
                alt="All inclusive"
                aria-label="Логотип сайта All inclusive"
            />
        </Link>
    )
}

export default Logo