import { FC, HTMLAttributes } from "react";
import "./Button.scss";
import { LoaderButton } from "../Loader/LoaderButton";

interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  isDisabled?: boolean;
  kind?: "primary" | "secondary";
  type?: "submit" | "reset" | "button";
  className?: string;
}

export const Button: FC<IButtonProps> = ({
  isLoading,
  isDisabled = isLoading,
  children,
  className,
  kind = "primary",
  type,
  ...props
}) => {
  return (
    <button
      disabled={isDisabled}
      type={type}
      className={`btn ${className}`}
      data-kind={kind}
      {...props}
    >
      {isLoading ? <LoaderButton /> : children}
    </button>
  );
};
