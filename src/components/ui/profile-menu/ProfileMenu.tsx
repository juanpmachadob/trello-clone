"use client";
import { signOut, useSession } from "next-auth/react";
import { useState } from "react";
import clsx from "clsx";
import { UserAvatar } from "@/components/ui";

interface Props {
  isDarkContent?: boolean;
}

export const ProfileMenu = ({isDarkContent}: Props) => {
  const [showMenu, setShowMenu] = useState(false);
  const { data: session } = useSession();
  if (!session) return null;

  /**
   * Closes the menu popover when clicking outside
   */
  const onBlur = (e: React.FocusEvent) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
      setShowMenu(false);
    }
  };

  return (
    <div
      id="menu-button"
      tabIndex={-1}
      onBlur={onBlur}
      className="relative flex items-center text-text"
    >
      <span
        className={clsx(
          "cursor-pointer rounded-full hover:outline hover:outline-4",
          {
            "hover:outline-white/15": !isDarkContent,
            "hover:outline-black/15": isDarkContent
          }
        )}
        onClick={() => setShowMenu(!showMenu)}
      >
        <UserAvatar height={24} width={24} />
      </span>

      {showMenu && (
        <div
          className="absolute right-0 top-12 z-10 w-80 rounded-lg border border-background-alternative bg-white py-3 shadow"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
          onBlur={() => setShowMenu(false)}
        >
          {/* Profile */}
          <div className="mt-4 flex flex-col gap-4 px-4">
            <h2 className="text-xs font-bold text-text-alternative">ACCOUNT</h2>
            <div className="flex gap-2">
              <UserAvatar height={40} width={40} />
              <div className="flex flex-col">
                <span className="text-sm">{session.user?.name || "User"}</span>
                <span className="text-xs text-text-alternative">
                  {session.user?.email}
                </span>
              </div>
            </div>
          </div>

          <hr className="mx-2 mb-2 mt-4" />

          {/* Options */}
          <ul className="flex cursor-pointer flex-col gap-4">
            <li className="w-full text-sm">
              <div
                className="w-full px-4 py-2 text-start hover:bg-background"
                onClick={() => signOut()}
              >
                Log out
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
