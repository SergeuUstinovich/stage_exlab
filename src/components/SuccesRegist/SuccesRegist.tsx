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

  const verifyEmailMutation = useMutation(
    {
      mutationFn: (data: { code: string }) => verifyEmail(data.code),
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
        <h2>
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
      <span className={style.regemail}>{email}</span>
      <form className={style.formSucReg} onSubmit={handleSubmit(({code}) => {
        verifyEmailMutation.mutate({code})
        
      })}>
        <FormField label="" errorMessage={errors.code?.message}>
          <input
            maxLength={5}
            placeholder="Код"
            type="text"
            {...register("code")}
            className={`${errors.code ? style.error : ""} ${style.labelSuccesCode}`} 
          />
        </FormField>
        <Button className={style.succesRegistBtn} isLoading={verifyEmailMutation.isPending}>Отправить</Button>
      </form>
      {verifyEmailMutation.error && <span>{verifyEmailMutation.error.message}</span>}
    </div>
  );
}

export default SuccesRegist;
