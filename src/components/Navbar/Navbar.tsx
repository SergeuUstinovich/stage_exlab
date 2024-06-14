import Autorized from "../Autorized/Autorized"
import Logo from "../Logo/Logo"
import Navigate from "../Navigate/Navigate"
import style from './Navbar.module.scss'

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

function Navbar() {
    return (
      <header>
        <div className={`container ${style.container_head}`}>
          <div className={style.head}>
            <Logo />
            <Navigate navigate={navigate}/>
            <Autorized />
          </div>
        </div>
      </header>
    )
}

export default Navbar;
