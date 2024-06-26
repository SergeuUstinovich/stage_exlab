import { useForm } from "react-hook-form";
import style from "./LoginForm.module.scss";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginScheme, LoginType } from "../../types";
import { FormField } from "../../ui/FormField";
import { useCallback, useEffect, useState } from "react";
import ShowPassword from "../../assets/svg/ShowPassword/ShowPassword";
import { Button } from "../../ui/Button";
import GooglePng from '../../assets/img/Google.png'
import Modal from "../../ui/Modal/Modal";
import ForgotForm from "../ForgotForm/ForgotForm";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../api/Auth";
import { queryClient } from "../../api/queryClient";
import { useDispatch } from "react-redux";
import { tokenActions } from "../../providers/StoreProvider/slice/tokenSlice";

function LoginForm() {

  const dispatch = useDispatch()
  
  const [showPassword, setShowPassword] = useState(false);
  const [isOpenForgot, setIsOpenForgot] = useState(false);


  const loginMutation = useMutation({
    mutationFn: (data: {
      email: string;
      password: string;
    }) => login(data.email, data.password),
    onSuccess: (data) => {
      localStorage.setItem('authToken', data);
      dispatch(tokenActions.initAuthData());
      reset();
    },
  }, queryClient)


  const onOpenModal = useCallback(() => {
    setIsOpenForgot(true);
  }, [isOpenForgot]);

  const onCloseModal = useCallback(() => {
    setIsOpenForgot(false);
  }, [isOpenForgot]);

  const handleTogglePassword = useCallback(() => {
    setShowPassword(!showPassword);
  }, [showPassword]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginType>({
    resolver: zodResolver(LoginScheme),
  });

  return (
    <>
      <form 
        className={style.form}
        onSubmit={handleSubmit(({email, password}) => {
          loginMutation.mutate({email, password})
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
              errors.email ? style.error : style.input
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
        {loginMutation.error && <span>{loginMutation.error.message}</span>}
        <div className={style.block_btn}>
          <Button
            isLoading={loginMutation.isPending}
            className={style.btnSubmit}
            type="submit"
            title="Войти"
          >Войти
          </Button>
          <p onClick={onOpenModal} className={style.forgot}>Забыли пароль?</p>
        </div>
      </form>
      <Button className={style.btnGoogle}>
        <div>
          <img 
          className={style.imgGoogle}
          src={GooglePng} 
          alt="GoogleLogo"
          />
        </div>
        Войти с помощью Google
      </Button>
      {isOpenForgot && (
        <Modal isOpen={isOpenForgot} onClose={onCloseModal} hiddenClose lazy>
          <ForgotForm />
        </Modal>
      )}
    </>
  );
}

export default LoginForm;
