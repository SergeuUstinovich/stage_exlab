import { Outlet } from "react-router-dom";
import Navbar from "../../pages/Navbar/Navbar";

function Layout() {
    return (
        <>
            <Navbar />
            <main>
                <div className='container'>
                    <Outlet />
                </div>
            </main>
            <footer>
                <div className='container'>

                </div>
            </footer>
        </>
    )
}

export default Layout