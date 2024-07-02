import { Switch } from "@headlessui/react"
import { useState } from "react";
import style from './SwitchTheme.module.scss'
import ThemeSvgMoon from "../../assets/svg/ThemeSvg/ThemeSvgMoon";
import ThemeSvgSun from "../../assets/svg/ThemeSvg/ThemeSvgSun";

function SwitchTheme() {
    const [enabled, setEnabled] = useState(false)


    const handleToggle = () => {
        setEnabled(!enabled);
      };
  
    return (
      <Switch as={'div'}
      checked={enabled} 
      onChange={handleToggle} 
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