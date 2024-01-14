"use client";
import { useContext } from "react";
import { PopoverContext } from "@/context";
import type { PopoverContextType } from "@/context";

interface Props {
  children: React.ReactNode;
}

export const PopoverWrapper = ({ children }: Props) => {
  const { onBlurPopover } = useContext(PopoverContext) as PopoverContextType;

  return (
    <div
      tabIndex={-1}
      onBlur={onBlurPopover}
      className="visible relative flex items-center justify-center text-text"
    >
      {children}
    </div>
  );
};
