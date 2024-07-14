import { useForm } from "react-hook-form";
import { Button } from "../../ui/Button";
import { FormField } from "../../ui/FormField";
import style from "./SuccesRegist.module.scss";
import { verifyEMailScheme, verifyEMailType } from "../../types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { verifyEmail } from "../../api/Auth";
import { useState } from "react";
import { queryClient } from "../../api/queryClient";

interface SuccesRegistProps {
  email: string;
}

function SuccesRegist({ email }: SuccesRegistProps) {
  const [succesVerify, setSuccesVerify] = useState(false);
  const [emailUser, setEmailUser] = useState(email);
  
  const verifyEmailMutation = useMutation(
    {
      mutationFn: (data: { code: string, email: string }) => verifyEmail(data.code, data.email),
      onSuccess: () => {
        setSuccesVerify(true)
        reset()
      },
    },
    queryClient
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<verifyEMailType>({
    resolver: zodResolver(verifyEMailScheme),
  });

  if(succesVerify) {
    return(
      <div className={style.confirmregwrapper}>
        <h2 className={style.thancks}>
          Благодарим за регистрацию!
        </h2>
      </div>
      
    )
  }

  return (
    <div className={style.confirmregwrapper}>
      <p className={style.confirmletter}>
      Введите одноразовый код, который был отправлен на&nbsp;электронную почту
      </p>
      <form className={style.formSucReg} onSubmit={handleSubmit(({code, email}) => {
        verifyEmailMutation.mutate({code, email})
      })}>
        <FormField label="" errorMessage={errors.email?.message}>
          <div className={style.labelEmail}>
            <input
              readOnly
              value={emailUser}
              type="text"
              {...register("email")}
              className={style.emailSucces}
            />
          </div>
        </FormField>
        <div className={style.codeUser}>
          <FormField className={style.labelSucces} label="" errorMessage={errors.code?.message}>
            <input
              maxLength={5}
              placeholder="Код"
              type="text"
              {...register("code")}
              className={`${errors.code ? style.error : ""} ${style.labelSuccesCode}`} 
            />
          </FormField>
          <Button className={style.succesRegistBtn} isLoading={verifyEmailMutation.isPending}>Отправить</Button>
        </div>
      </form>
      {verifyEmailMutation.error && <span className={style.sistemError}>{verifyEmailMutation.error.message}</span>}
    </div>
  );
}

export default SuccesRegist;
