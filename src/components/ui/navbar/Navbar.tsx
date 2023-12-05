import Image from "next/image";
import clsx from "clsx";
import { IoApps } from "react-icons/io5";
import "./navbar.css";

interface Props {
  isDarkContent?: boolean;
  className?: string;
}

export const Navbar = ({ isDarkContent, className }: Props) => {
  return (
    <header
      className={clsx(
        "flex h-12 w-full flex-row items-center gap-4 border-b px-4",
        { "text-white border-b-white/15": !isDarkContent },
        { "text-text-alternative border-b-black/15": isDarkContent },
        className
      )}
    >
      <IoApps />
      <Image
        src="/assets/logos/trello-animated.gif"
        alt="Trello logo"
        className={clsx({ "trello-animated-alternative": isDarkContent })}
        width={80}
        height={80}
      />
    </header>
  );
};
