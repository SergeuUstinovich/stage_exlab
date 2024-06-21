import { useForm } from "react-hook-form";
import { FormField } from "../../ui/FormField";
import style from "./ForgotForm.module.scss";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateRegistrationForm, CreateRegistrationSchema } from "../../types";
import { Button } from "../../ui/Button";

function ForgotForm() {


    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
      } = useForm<CreateRegistrationForm>({
        resolver: zodResolver(CreateRegistrationSchema),
      });

  return (
    <form 
      className={style.form}
      onSubmit={handleSubmit(() => {
        reset();
    })}>
      <h2 className={style.forgotFormH2}>Восстановление пароля</h2>
      <FormField
        className={style.forgotFormEmailWrapper}
        label="Введите электронную почту, указанную при регистрации"
        errorMessage={errors.email?.message}
      >
        <input
          autoComplete="email"
          placeholder="Электронная почта"
          type="text"
          {...register("email")}
          className={`${style.input} ${
            errors.email ? style.error : style.input
          }`}
        />
      </FormField>
      <Button className={style.forgotFormBtn}
        type="submit"
      >Получить проверочный код
      </Button>
    </form>
  );
}

export default ForgotForm;
