import { Switch } from "@headlessui/react"
import { Fragment, useState } from "react";
import style from './SwitchTheme.module.scss'

function SwitchTheme() {
    const [enabled, setEnabled] = useState(false)

    const handleToggle = () => {
        setEnabled(!enabled);
      };
  
    return (
      <Switch 
      checked={enabled} 
      onChange={handleToggle} 
      className={style.group}
      >
        <span aria-hidden="true"></span>
      </Switch>
    )
  }
  export default SwitchTheme