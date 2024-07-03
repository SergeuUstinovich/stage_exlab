import { Switch } from "@headlessui/react"
import { useEffect, useState } from "react";
import style from './SwitchTheme.module.scss'
import ThemeSvgMoon from "../../assets/svg/ThemeSvg/ThemeSvgMoon";
import ThemeSvgSun from "../../assets/svg/ThemeSvg/ThemeSvgSun";
import { useTheme } from "../../providers/ThemeContext/useTheme";
import { Theme } from "../../providers/ThemeContext/ThemeContext";

function SwitchTheme() {
    const [enabled, setEnabled] = useState(false)
    const {theme, toggleTheme} = useTheme()
    const newTheme = theme === Theme.DARK ? true : false
    const handleToggle = () => {
        setEnabled(newTheme);
      };
      
    useEffect(() => {
      setEnabled(newTheme);
    }, [theme])
  
    return (
      <Switch as={'div'}
      checked={enabled} 
      onChange={handleToggle}
      onClick={toggleTheme} 
      className={style.group}
      >
        {enabled && <ThemeSvgSun className={style.sunTheme} />}
        <span aria-hidden="true">
            {!enabled ? <ThemeSvgSun /> : <ThemeSvgMoon />}
        </span>
        {!enabled && <ThemeSvgMoon className={style.moonTheme} />}
      </Switch>
    )
  }
  export default SwitchTheme