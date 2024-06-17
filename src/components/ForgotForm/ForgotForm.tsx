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
      <h2>Восстановление пароля</h2>
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
      <Button
        type="submit"
      >Выслать код
      </Button>
    </form>
  );
}

export default ForgotForm;
