import { useState } from 'react'
import style from './AuthForm.module.scss'
import SwitchAutoriz from '../SwitchAutoriz/SwitchAutoriz'
import SwitchAutorizOption from '../SwitchAutoriz/SwitchAutorizOption'

type AuthType = 'login' | 'registration'

function AuthForm() {

    const [authType, setAuthType] = useState<AuthType>('login')

    return (
        <div className={style.auth}>
            <SwitchAutoriz>
                <SwitchAutorizOption 
                    title='Войти' 
                    isActive={authType === 'login'}
                    onClick={() => setAuthType('login')}
                />
                <SwitchAutorizOption
                    title='Регистрация' 
                    isActive={authType === 'registration'}
                    onClick={() => setAuthType('registration')}
                 />
            </SwitchAutoriz>
        </div>
    )
}

export default AuthForm