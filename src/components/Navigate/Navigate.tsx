import { Link } from "react-router-dom"
import style from './Navigate.module.scss'
import { useMediaQuery } from "react-responsive"
import { Navig } from "../Navbar";
import PhoneSvg from "../../assets/svg/PhoneSvg/PhoneSvg";

interface NavigateProps {
    navigate: Navig[];
}

function Navigate({navigate}:NavigateProps) {

    const isMobile = useMediaQuery({ query: `(max-width: 933px)` });

    return (
        <nav className={style.nav}>
            {isMobile ? (
            <div>
                <PhoneSvg />
            </div>
            ) : (
            <ul className={style.list}>
                {navigate.map(item => 
                    <li key={item.name} className={style.item}>
                        <Link className={style.link} to={item.path}>
                            {item.name}
                        </Link>
                    </li>
                )}
            </ul>)}
        </nav>
    )
}

export default Navigate