import { Ref, TextareaHTMLAttributes, forwardRef } from "react";
import clsx from "clsx";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  placeholder: string;
  autoFocus?: boolean;
  className?: string;
}

const TextArea = forwardRef(
  (
    { autoFocus = false, id, placeholder, className, ...props }: Props,
    ref: Ref<HTMLTextAreaElement>
  ) => {
    return (
      <textarea
        ref={ref}
        id={id}
        placeholder={placeholder}
        autoFocus={autoFocus}
        className={clsx(
          "relative flex w-full cursor-pointer resize-none items-center justify-between rounded-lg bg-white p-2 text-sm text-text shadow outline-2 outline-primary hover:outline focus:outline",
          className
        )}
        {...props}
      ></textarea>
    );
  }
);

TextArea.displayName = "TextArea";
export default TextArea;
