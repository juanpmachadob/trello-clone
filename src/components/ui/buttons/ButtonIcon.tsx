import clsx from "clsx";
import type { IconType } from "react-icons";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  Icon: IconType;
  iconSize?: number;
  className?: string;
}

const ButtonIcon = ({ Icon, iconSize = 16, className, ...props }: Props) => {
  return (
    <button
      type="button"
      className={clsx(
        "flex size-8 items-center justify-center text-text hover:cursor-pointer hover:bg-black/10",
        className
      )}
      {...props}
    >
      <Icon size={iconSize} />
    </button>
  );
};

export default ButtonIcon;
