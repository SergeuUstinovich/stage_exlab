import { useForm } from "react-hook-form";
import style from "./LoginForm.module.scss";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateRegistrationForm, CreateRegistrationSchema } from "../../types";
import { FormField } from "../../ui/FormField";
import { useCallback, useState } from "react";
import ShowPassword from "../../assets/svg/ShowPassword/ShowPassword";
import { Button } from "../../ui/Button";

function LoginForm() {

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = useCallback(() => {
    setShowPassword(!showPassword);
  }, [showPassword]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreateRegistrationForm>({
    resolver: zodResolver(CreateRegistrationSchema),
  });

  return (
    <>
      <form 
        className={style.form}
        onSubmit={handleSubmit(() => {
          
          reset();
        })}
      >
        <FormField
          label="Электронная почта*"
          errorMessage={errors.email?.message}
        >
        <div>
          <input
            autoComplete="email"
            placeholder="Электронная почта"
            type="text"
            {...register("email")}
            className={`${style.input} ${
              errors.password ? style.error : style.input
            }`}
          />
        </div>
        </FormField>
        <FormField label="Пароль*" errorMessage={errors.password?.message}>
          <div className={style.regintput}>
            <input
              autoComplete="new-password"
              maxLength={25}
              placeholder="Пароль"
              type={showPassword ? "text" : "password"}
              {...register("password")}
              className={`${style.input} ${
                errors.password ? style.error : style.input
              }`}
            />
            <div className={style.showpassword} onClick={handleTogglePassword}>
              <ShowPassword />
            </div>
          </div>
        </FormField>
        <div>
          <Button
            type="submit"
            title="Войти"
          >Войти
          </Button>
          <p>Забыли пароль?</p>
        </div>
      </form>
      <Button>Войти с помощью Google</Button>
    </>
  );
}

export default LoginForm;
