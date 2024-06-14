import { Button } from "../../utils/Button"
import AvatarNoName from "../../assets/svg/AvatarNoName/AvatarNoName"
import style from './Autorized.module.scss'
import { Suspense, lazy, useCallback, useState } from "react"
import Modal from "../../utils/Modal/Modal"
import { Link, Outlet, Route, Routes } from "react-router-dom"
import { LoaderPage } from "../../utils/Loader/LoaderPage"

const AuthForm = lazy(()=> import('../AuthForm/AuthForm'))

function Autorized() {

    const [isOpenModal, setIsOpenModal] = useState(false)

    const auth = true

    const onToggleModal = useCallback(()=> {
        setIsOpenModal((prev) => !prev)
    }, [])

    return(
        <div className={style.autoriz}>
            <div className={style.wiget}>
            {!auth && 
                <div className={style.username}>QWERTYUIOPASD</div>
            }
            </div>
            <Link to={'/authoriz'}>
            <Button className={style.avatar} onClick={onToggleModal}>
                <AvatarNoName className={style.icon} />
                {auth && 
                    <p className={style.descr}>Войти</p>
                }  
            </Button>
            </Link>
            <Modal isOpen={isOpenModal} onClose={onToggleModal} hiddenClose lazy>
                <Suspense fallback={<div className={style.loader}><LoaderPage /></div>}>
                    <Routes>
                        <Route path={'/authoriz'} element={<AuthForm />} />
                    </Routes>
                </Suspense>
            </Modal>
        </div>
    )
}

export default Autorized