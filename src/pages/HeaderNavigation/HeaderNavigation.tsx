import Autorized from "../../components/Autorized/Autorized"
import Logo from "../../components/Logo/Logo"
import Navigate from "../../components/Navigate/Navigate"
import style from './HeaderNavigation.module.scss'

export interface Navig {
  name: string
  path: string
}

const navigate:Navig[] = [
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

function HeaderNavigation() {
    return (
        <div className={style.head}>
          <Logo />
          <Navigate navigate={navigate}/>
          <Autorized />
        </div>
    )
}

export default HeaderNavigation;
