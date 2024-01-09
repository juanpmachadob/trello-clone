"use client";
import { useState } from "react";
import { IoClose, IoEllipsisHorizontalSharp } from "react-icons/io5";
import { ButtonIcon } from "@/components/ui";

interface Props {
  handleDelete: () => void;
}

export const ListMenu = ({ handleDelete }: Props) => {
  const [showMenu, setShowMenu] = useState(false);

  /**
   * Closes the list menu popover when clicking outside
   */
  const onBlur = (e: React.FocusEvent) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
      setShowMenu(false);
    }
  };

  return (
    <div
      id="list-menu-button"
      tabIndex={-1}
      onBlur={onBlur}
      className="relative"
    >
      <ButtonIcon
        Icon={IoEllipsisHorizontalSharp}
        className="rounded-lg p-2 text-text-alternative"
        onClick={() => setShowMenu(!showMenu)}
      />

      {showMenu && (
        <div
          className="absolute left-0 top-8 z-10 w-72 rounded-lg border border-background-alternative bg-white py-2 shadow"
          role="list actions"
          aria-orientation="vertical"
          aria-labelledby="list-menu-button"
          tabIndex={-1}
          onBlur={() => setShowMenu(false)}
        >
          <header className="relative flex h-8 items-center justify-center">
            <p className="font-semibold text-text-alternative">List actions</p>
            <ButtonIcon
              Icon={IoClose}
              className="absolute right-2 top-0 rounded-lg text-text-alternative"
              onClick={() => setShowMenu(false)}
            />
          </header>
          <hr className="m-2" />
          {/* Options */}
          <ul className="flex cursor-pointer flex-col">
            <li
              className="px-4 py-2 text-start text-sm hover:bg-background"
              onClick={() => handleDelete()}
            >
              Delete this list
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
