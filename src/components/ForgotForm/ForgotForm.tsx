import { useForm } from "react-hook-form";
import { FormField } from "../../ui/FormField";
import style from "./ForgotForm.module.scss";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CreateRegistrationForm,
  CreateRegistrationSchema,
  ForgotEmailScheme,
  ForgotEmailType,
} from "../../types";
import { Button } from "../../ui/Button";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../api/queryClient";
import { forgotEmail } from "../../api/Auth";
import ForgotCodeForm from "../ForgotCodeForm/ForgotCodeForm";

function ForgotForm() {
  const forgotMutation = useMutation(
    {
      mutationFn: (data: { email: string }) => forgotEmail(data.email),
      onSuccess: () => {
        reset();
      },
    },
    queryClient
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ForgotEmailType>({
    resolver: zodResolver(ForgotEmailScheme),
  });

  if (forgotMutation.isSuccess) {
    return <ForgotCodeForm />;
  }

  return (
    <form
      className={style.form}
      onSubmit={handleSubmit(({ email }) => {
        forgotMutation.mutate({ email });
      })}
    >
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
      {forgotMutation.error && <span>{forgotMutation.error.message}</span>}
      <Button
        isLoading={forgotMutation.isPending}
        className={style.forgotFormBtn}
        type="submit"
      >
        Получить проверочный код
      </Button>
    </form>
  );
}

export default ForgotForm;
