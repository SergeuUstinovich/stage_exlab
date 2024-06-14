import style from './SuccesRegist.module.scss'

interface SuccesRegistProps {
    email: string
}

function SuccesRegist({email}:SuccesRegistProps) {
    return (
        <div className={style.confirmregwrapper}>
            <h2 className={style.thanksforreg}>Благодарим за регистрацию</h2>
            <p className={style.confirmletter}>Письмо с подтверждающей ссылкой выслано на электронный адрес:</p>
            <span className={style.regemail}>{email}</span>
        </div>
        
    )
}

export default SuccesRegist