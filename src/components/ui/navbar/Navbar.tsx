import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { IoApps } from "react-icons/io5";
import { ProfileMenu } from "@/components/ui";
import "./navbar.css";

interface Props {
  isDarkContent?: boolean;
  className?: string;
}

const Navbar = ({ isDarkContent, className }: Props) => {
  return (
    <header
      className={clsx(
        "flex h-12 w-full justify-between border-b px-4",
        {
          "text-white border-b-white/15": !isDarkContent,
          "text-text-alternative border-b-black/15": isDarkContent,
        },
        className
      )}
    >
      <div className="flex items-center gap-2">
        <IoApps />
        <Link
          href="/boards"
          className={clsx("rounded-sm p-2", {
            "hover:bg-white/15": !isDarkContent,
            "hover:bg-black/15": isDarkContent,
          })}
        >
          <Image
            src="/assets/logos/trello-animated.gif"
            alt="Trello logo"
            className={clsx({
              "select-none trello-animated-alternative": isDarkContent,
            })}
            width={80}
            height={80}
          />
        </Link>
      </div>
      <ProfileMenu isDarkContent={isDarkContent} />
    </header>
  );
};

export default Navbar;
