import { Button } from '../../utils/Button'
import { FormField } from '../../utils/FormField'
import style from './RegisterForm.module.scss'

function RegisterForm() {
    return (
        <form className={style.form}>
            <FormField label='Имя'>
                <input type="text" />
            </FormField>
            <FormField label='Электронная почта'>
                <input type="text" />
            </FormField>
            <FormField label='Пароль'>
                <input type="text" />
            </FormField>
            <FormField label='Повторите пароль'>
                <input type="text" />
            </FormField>
            <div>
                <input type="checkbox" />
                <p>Даю согласие на обработку персональных данных</p>
            </div>
            <Button>Зарегистироваться</Button>
        </form>
    )
}

export default RegisterForm