import { Link } from "react-router-dom"
import style from './Navigate.module.scss'

interface navig {
    name: string
    path: string
}

const navigate:navig[] = [
    {
        name: 'Услуги',
        path: '/services'
    },
    {
        name: 'О нас',
        path: '/aboutUs'
    },
    {
        name: '+375 (29) 878 87 87',
        path: 'tel:+375298788787'
    },
]

function Navigate() {
    return (
        <nav className={style.nav}>
            <ul className={style.list}>
                {navigate.map(item => 
                    <li key={item.name} className={style.item}>
                        <Link className={style.link} to={item.path}>
                            {item.name}
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default Navigate