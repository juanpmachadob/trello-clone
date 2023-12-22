"use client";
import { signOut, useSession } from "next-auth/react";
import { useState } from "react";
import { UserAvatar } from "@/components/ui";

export const ProfileMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { data: session } = useSession();
  if (!session) return null;

  return (
    <div id="menu-button" className="relative flex items-center text-text">
      <span
        className="cursor-pointer rounded-full hover:outline hover:outline-4 hover:outline-background"
        onClick={() => setShowMenu(!showMenu)}
      >
        <UserAvatar height={32} width={32} />
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
              <button
                className="w-full px-4 py-2 text-start hover:bg-background"
                onClick={() => signOut()}
              >
                Log out
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
