import { useForm } from "react-hook-form";
import { FormField } from "../../ui/FormField"
import { zodResolver } from "@hookform/resolvers/zod";
import style from './ForgotCodeForm.module.scss'
import { ForgotCodeScheme, ForgotCodeType } from "../../types";
import { useCallback, useState } from "react";
import ShowPassword from "../../assets/svg/ShowPassword/ShowPassword";
import { Button } from "../../ui/Button";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../api/queryClient";
import { forgotCode } from "../../api/Auth";

function ForgotCodeForm() {

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
      } = useForm<ForgotCodeType>({
        resolver: zodResolver(ForgotCodeScheme),
      });

      const ForgotCodeMutation = useMutation({
        mutationFn: (data: {
          code: string;
          password: string;
          confirmPassword: string;
        }) => forgotCode(data.code, data.password, data.confirmPassword),
        onSuccess: (data) => {
          
          reset();
        },
      }, queryClient)



      const handleTogglePassword = useCallback(() => {
        setShowPassword(!showPassword);
      }, [showPassword]);
    
      const handleToggleConfirmPassword = useCallback(() => {
        setShowConfirmPassword(!showConfirmPassword);
      }, [showConfirmPassword]);

    if(ForgotCodeMutation.isSuccess) {
        return (
            <div>Доступ восстановлен</div>
        )
    }

    return (
        <form
        className={style.form}
        onSubmit={handleSubmit(({code, password, confirmPassword}) => {
            ForgotCodeMutation.mutate({code, password, confirmPassword})
        }
        )}
      >
        <FormField
          label="Введите одноразовый код, отправленный на вашу электронную почту"
          errorMessage={errors.code?.message}
        >
          <input
            maxLength={5}
            autoComplete="email"
            placeholder="Код"
            type="text"
            {...register("code")}
            className={errors.code ? style.error : ""}
          />
        </FormField>
        <FormField label="Придумайте новый пароль" errorMessage={errors.password?.message}>
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
        <FormField
          label="Повторите, чтобы не ошибится"
          errorMessage={errors.confirmPassword?.message}
        >
          <div className={style.regintput}>
            <input
              autoComplete="new-password"
              maxLength={25}
              placeholder="Пароль"
              type={showConfirmPassword ? "text" : "password"}
              {...register("confirmPassword")}
              className={`${style.input} ${
                errors.confirmPassword ? style.error : style.input
              }`}
            />
            <div
              className={style.showpassword}
              onClick={handleToggleConfirmPassword}
            >
              <ShowPassword />
            </div>
          </div>
        </FormField>
        
        {ForgotCodeMutation.error && <span className={style.sistemError}>{ForgotCodeMutation.error.message}</span>}
        <Button
          className={style.regbtn}
          type="submit"
          title="Далее"
          isLoading={ForgotCodeMutation.isPending}
        >
          Далее
        </Button>
      </form>
      
    )
}

export default ForgotCodeForm