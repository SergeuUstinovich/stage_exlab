import { Link } from "react-router-dom"
import style from './Logo.module.scss'
import { useMediaQuery } from "react-responsive"
import LogoSvg from "../../assets/svg/LogoSvg/LogoSvg"

function Logo() {

    const isMobile = useMediaQuery({query: `(max-width: 576px)`})

    return (
        
        <Link className={style.link} to={'/'}>
            {isMobile ? (
                <LogoSvg className={style.logo_576} />
            ) : (
            <img
                className={style.logo}
                src="../src/assets/img/Logo.png"
                alt="All inclusive"
                aria-label="Логотип сайта All inclusive"
            />
            )}
            
        </Link>
    )
}

export default Logo