import { MouseEventHandler } from 'react';
import style from './SwitchAutorizOption.module.scss'

interface SwitchAutorizOptionProps {
    isActive: boolean;
    title: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
    className?: string;
}

function SwitchAutorizOption({isActive, title, onClick, className}:SwitchAutorizOptionProps) {
    return (
        <button
            data-active={isActive}
            className={`${style.switch_option} ${className}`}
            onClick={onClick}
        >
            {title}
        </button>
    )
}

export default SwitchAutorizOption