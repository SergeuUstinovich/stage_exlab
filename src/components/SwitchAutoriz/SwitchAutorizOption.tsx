import { MouseEventHandler } from 'react';
import style from './SwitchAutorizOption.module.scss'

interface SwitchAutorizOptionProps {
    isActive: boolean;
    title: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
}

function SwitchAutorizOption({isActive, title, onClick}:SwitchAutorizOptionProps) {
    return (
        <button
            data-active={isActive}
            className={style.switch_option}
            onClick={onClick}
        >
            {title}
        </button>
    )
}

export default SwitchAutorizOption