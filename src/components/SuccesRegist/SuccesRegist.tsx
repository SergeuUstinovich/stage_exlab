import style from './SuccesRegist.module.scss'

interface SuccesRegistProps {
    email: string
}

function SuccesRegist({email}:SuccesRegistProps) {
    return (
        <div>
            <h2>Благодарим за регистрации</h2>
            <p>Письмо с подтверждающей ссылкой выслано на электронный адрес:</p>
            <span>{email}</span>
        </div>
        
    )
}

export default SuccesRegist