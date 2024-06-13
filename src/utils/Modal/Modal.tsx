import { ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import style from './Modal.module.scss'
import Portal from '../Portal/Portal';
import CloseModalSvg from '../../assets/svg/CloseModalSvg/CloseModalSvg';

interface ModalProps {
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
    hiddenClose?: boolean;
}

function Modal(props:ModalProps) {

    const {
        children,
        isOpen,
        onClose,
        lazy,
        hiddenClose = false
    } = props

    const [isClosing, setIsClosing] = useState(false)
    const [isMouned, setIsMouned] = useState(false)
    //для первого монтирования если передал lazy
    useEffect(() => {
        if(isOpen) {
            setIsMouned(true)
        }
    }, [isOpen])

    const timeRef = useRef<ReturnType<typeof setTimeout>>();

    const closeHandler = useCallback(() => {
        if(onClose) {
            setIsClosing(true)
            timeRef.current = setTimeout(()=> {
                setIsClosing(false)
                onClose()
            }, 300)
        }
    }, [onClose])

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if(e.key === 'Escape') {
            closeHandler()
        }
    },[closeHandler])

    const onContentClick = (e:React.MouseEvent) => {
        e.stopPropagation();
    }

    useEffect(() => {
        if(isOpen) {
            window.addEventListener('keydown', onKeyDown)
        }

        return () => {
            clearTimeout(timeRef.current);
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [isOpen, onKeyDown])

    //для первого монтирования

    if(lazy && !isMouned) {
        return null
    }
    
    const modalClassName = isOpen
        ? `${style.modal} ${style.open}${isClosing ? ` ${style.close}` : ''}`
        : style.modal;

    return (
        <Portal>
        <div className={modalClassName}>
            <div className={style.overlay} onClick={closeHandler} >
                <div className={style.content} onClick={onContentClick} >
                    {hiddenClose && (
                    <div className={style.closeCross} >
                        <CloseModalSvg onCloses={closeHandler} />
                    </div>
                    )}
                    {children}
                </div>
            </div>
        </div>
        </Portal>   
    )
}

export default Modal