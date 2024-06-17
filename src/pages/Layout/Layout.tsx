import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import style from './Layout.module.scss'

function Layout() {
    return (
        <>
            <Navbar />
            <main className={style.page__content}>
                <div className={style.container}>
                    <Outlet />
                </div>
            </main>
            <footer>
                <div className={style.container}>

                </div>
            </footer>
        </>
    )
}

export default Layout