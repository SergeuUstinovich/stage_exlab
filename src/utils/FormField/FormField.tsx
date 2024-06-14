import { FC, ReactNode } from "react";
import style from "./FormField.module.scss";

interface IFormFieldProps {
  label: string;
  children: ReactNode;
  errorMessage?: string;
}

export const FormField: FC<IFormFieldProps> = ({
  children,
  label,
  errorMessage,
}) => {
  return (
    <label className={style.field}>
      <span className={style.field__label}>{label}</span>
      {children}
      {errorMessage && (
        <span className={style.field__error}>{errorMessage}</span>
      )}
    </label>
  );
};
