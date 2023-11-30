import clsx from "clsx";
import InputError from "./InputError";
import { FieldError } from "react-hook-form";
import { Ref, forwardRef } from "react";

interface Props {
  id: string;
  type?: string;
  placeholder: string;
  autoFocus?: boolean;
  error?: FieldError;
  className?: string;
}

const Input = forwardRef(
  (
    {
      autoFocus = false,
      id,
      type = "text",
      placeholder,
      error,
      className,
      ...props
    }: Props,
    ref: Ref<HTMLInputElement>
  ) => {
    return (
      <>
        <input
          ref={ref}
          id={id}
          type={type}
          placeholder={placeholder}
          autoFocus={autoFocus}
          className={clsx(
            "w-full rounded-sm border-2 border-background-alternative px-1 py-2 text-sm outline-primary placeholder:text-text-alternative hover:bg-[#f7f8f9] focus:bg-transparent",
            { "border-danger": error },
            className
          )}
          {...props}
        />
        <InputError error={error} />
      </>
    );
  }
);

Input.displayName = "Input";
export default Input;
