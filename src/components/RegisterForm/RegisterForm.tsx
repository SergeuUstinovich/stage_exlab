import { z } from "zod";
import { Button } from "../../utils/Button";
import { FormField } from "../../utils/FormField";
import style from "./RegisterForm.module.scss";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useState } from "react";
import ShowPassword from "../../assets/svg/ShowPassword/ShowPassword";
import Modal from "../../utils/Modal/Modal";
import SuccesRegist from "../SuccesRegist/SuccesRegist";

const CreateRegistrationSchema = z
  .object({
    username: z
      .string()
      .min(1, "Минимальное количество символов 1")
      .max(15, "Превышена максимальная длина имени пользователя")
      .regex(
        /^[a-zA-Zа-яА-Я0-9\s.,]+$/,
        "Имя может содержать только буквы, цифры, пробелы, точки и запятые"
      )
      .refine(
        (value) => value.trim().length > 0 && !value.startsWith(" "),
        "Поле не должно быть пустым"
      ),
    email: z
      .string()
      .email("Проверьте правильность ввода электронной почты")
      .max(320, "Превышена максимальная длина адреса электронной почты"),
    password: z
      .string()
      .min(7, "Введите более 7 символов")
      .max(25, "Не более 25 символов")
      .regex(
        /^[a-zA-Z0-9~!@#$%^&*()[\]{}><\/\\|"'.,:;]+$/,
        "Пароль может содержать только латинские буквы, цифры и ~!@#$%^&*()[]{}>< и другие символы"
      )
      .refine(
        (value) => !value.startsWith(" "),
        "Пароль не должен начинаться с пробела"
      ),
    confirmPassword: z.string(),
    consent: z
      .boolean()
      .refine((value) => value, "Для регистрации необходимо дать согласие"),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "Пароли не совпадают",
        path: ["confirmPassword"],
      });
    }
  });

type CreateRegistrationForm = z.infer<typeof CreateRegistrationSchema>;

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
        onSubmit={handleSubmit((data) => {
          setEmailValue(data.email);
          setIsOpenModal(true);
          reset();
        })}
      >
        <FormField label="Имя*" errorMessage={errors.username?.message}>
          <input
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
              className={`${style.customcheckinput} ${style.visuallyhidden}`}
              {...register("consent")}
            />
            <span className={style.customchecktext}>
              Даю согласие на обработку персональных данных
            </span>
          </div>
        </FormField>
        <Button
          className={style.regbtn}
          type="submit"
          title="Зарегистрироваться"
        >
          Зарегистироваться
        </Button>
      </form>
      {isOpenModal && (
        <Modal isOpen={isOpenModal} onClose={onCloseModal} hiddenClose>
          <SuccesRegist email={emailValue} />
        </Modal>
      )}
    </div>
  );
}

export default RegisterForm;
