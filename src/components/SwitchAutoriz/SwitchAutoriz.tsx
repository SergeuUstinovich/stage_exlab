import { ReactNode } from 'react';
import style from './SwitchAutoriz.module.scss'

interface SwitchAutorizProps {
    children: ReactNode;
}

function SwitchAutoriz({children}:SwitchAutorizProps) {
    return (
        <div className={style.switch}>{children}</div>
    )
}

export default SwitchAutoriz