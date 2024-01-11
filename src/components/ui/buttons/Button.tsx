import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary";
  size?: "sm" | "md";
}

const Button = ({
  type = "button",
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: Props) => {
  return (
    <button
      type={type}
      className={clsx(
        "flex items-center justify-center gap-2 text-nowrap rounded px-2 text-sm font-semibold text-text outline-0 hover:brightness-90 active:brightness-50",
        {
          "bg-primary text-white": variant === "primary",
          "bg-background": variant === "secondary",
          "bg-white border border-background-alternative":
            variant === "tertiary",
          "h-8": size === "sm",
          "h-10": size === "md",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
