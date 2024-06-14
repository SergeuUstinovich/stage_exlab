import { useState } from 'react'
import style from './AuthForm.module.scss'
import SwitchAutoriz from '../SwitchAutoriz/SwitchAutoriz'
import SwitchAutorizOption from '../SwitchAutoriz/SwitchAutorizOption'
import LoginForm from '../LoginForm/LoginForm'
import RegisterForm from '../RegisterForm/RegisterForm'

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
                    className={style.login}
                />
                <SwitchAutorizOption
                    title='Регистрация' 
                    isActive={authType === 'registration'}
                    onClick={() => setAuthType('registration')}
                    className={style.registration}
                 />
            </SwitchAutoriz>

            {authType == 'login' ? <LoginForm /> : <RegisterForm />}
        </div>
    )
}

export default AuthForm