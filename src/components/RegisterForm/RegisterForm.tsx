import { Button } from "../../ui/Button";
import style from "./RegisterForm.module.scss";
import { FormField } from "../../ui/FormField";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useState } from "react";
import ShowPassword from "../../assets/svg/ShowPassword/ShowPassword";
import Modal from "../../ui/Modal/Modal";
import SuccesRegist from "../SuccesRegist/SuccesRegist";
import { CreateRegistrationForm, CreateRegistrationSchema } from "../../types";
import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../../api/Auth";
import { queryClient } from "../../api/queryClient";

function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [emailValue, setEmailValue] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreateRegistrationForm>({
    resolver: zodResolver(CreateRegistrationSchema),
  });

  const registerMutation = useMutation(
    {
      mutationFn: (data: {
        username: string;
        email: string;
        password: string;
        confirmPassword: string;
      }) =>
        registerUser(
          data.username,
          data.email,
          data.password,
          data.confirmPassword
        ),
      onSuccess: () => {
        setIsOpenModal(true);
        reset();
      },
      onError: (error) => {
        console.log("Ошибка", error);
      },
    },
    queryClient
  );

  const handleTogglePassword = useCallback(() => {
    setShowPassword(!showPassword);
  }, [showPassword]);

  const handleToggleConfirmPassword = useCallback(() => {
    setShowConfirmPassword(!showConfirmPassword);
  }, [showConfirmPassword]);

  const onCloseModal = () => {
    setIsOpenModal(false);
  };

  return (
    <div>
      <form
        className={style.form}
        onSubmit={handleSubmit(
          ({ username, email, password, confirmPassword }) => {
            registerMutation.mutate({
              username,
              email,
              password,
              confirmPassword,
            });
            setEmailValue(email);
          }
        )}
      >
        <FormField label="Имя*" errorMessage={errors.username?.message}>
          <input
            autoComplete="username"
            placeholder="Имя"
            type="text"
            maxLength={16}
            {...register("username")}
            className={errors.username ? style.error : ""}
          />
        </FormField>
        <FormField
          label="Электронная почта*"
          errorMessage={errors.email?.message}
        >
          <input
            autoComplete="email"
            placeholder="Электронная почта"
            type="text"
            {...register("email")}
            className={errors.email ? style.error : ""}
          />
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
        <FormField
          label="Повторите пароль*"
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
        <FormField label="" errorMessage={errors.consent?.message}>
          <div className={style.customcheck}>
            <input
              type="checkbox"
              defaultChecked
              className={`${style.customcheckinput} ${style.visuallyhidden}`}
              {...register("consent")}
            />
            <span className={style.customchecktext}>
              Даю согласие на обработку персональных данных
            </span>
          </div>
        </FormField>
        {registerMutation.error && <span className={style.sistemError}>{registerMutation.error.message}</span>}
        <Button
          className={style.regbtn}
          type="submit"
          title="Зарегистрироваться"
          isLoading={registerMutation.isPending}
        >
          Зарегистрироваться
        </Button>
      </form>
      {isOpenModal && (
        <Modal isOpen={isOpenModal} onClose={onCloseModal} hiddenClose lazy>
          <SuccesRegist email={emailValue} />
        </Modal>
      )}
    </div>
  );
}

export default RegisterForm;
