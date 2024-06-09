import { ReactNode } from 'react'
import style from './Modal.module.scss'

interface ModalProps {
    children?: ReactNode;
}

function Modal(props:ModalProps) {
    const {
        children
    } = props
    return (
        <div className={style.modal}>
            <div className={style.overlay}>
                <div className={style.content}>
                    {children}
                </div>
            </div>
        </div>
        
    )
}

export default Modal