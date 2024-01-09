"use client";
import { useContext } from "react";
import { PopoverContext } from "@/context";
import type { PopoverContextType } from "@/context";

interface Props {
  children: React.ReactNode;
}

export const PopoverOpener = ({ children }: Props) => {
  const { showPopover, setShowPopover } = useContext(
    PopoverContext
  ) as PopoverContextType;

  return (
    <span
      className="cursor-pointer"
      onClick={() => setShowPopover(!showPopover)}
    >
      {children}
    </span>
  );
};
