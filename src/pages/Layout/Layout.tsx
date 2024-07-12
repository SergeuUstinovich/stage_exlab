import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import style from "./Layout.module.scss";
import { useTheme } from "../../providers/ThemeContext/useTheme";
import { classNames } from "../../utils/classNames";
import Footers from "../../components/Footers/Footers";
import Partners from "../../components/Partners/Partners";

function Layout() {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <main className={style.page__content}>
        <div className="container">
          <Outlet />
        </div>
        <div className="container">
          <Partners />
        </div>
      </main>
      <footer>
        <div className="container">
          <Footers />
        </div>
      </footer>
    </div>
  );
}

export default Layout;
