"use client";
import { useContext } from "react";
import clsx from "clsx";
import { IoClose } from "react-icons/io5";
import { PopoverContext } from "@/context";
import type { PopoverContextType } from "@/context";
import { ButtonIcon } from "@/components/ui";
import { PopoverContentSection } from "./PopoverContentSection";

interface Props {
  title: string;
  className?: string;
  children: React.ReactNode;
}

export const PopoverContent = ({ title, className, children }: Props) => {
  const { showPopover, setShowPopover } = useContext(
    PopoverContext
  ) as PopoverContextType;

  if (showPopover)
    return (
      <div
        className={clsx(
          "absolute z-10 w-72 rounded-lg border border-background-alternative bg-white py-2 shadow",
          className
        )}
        role="list actions"
        aria-orientation="vertical"
        tabIndex={-1}
        onBlur={() => setShowPopover(false)}
      >
        <header className="relative flex h-8 items-center justify-center">
          <p className="font-semibold text-text-alternative">{title}</p>
          <ButtonIcon
            Icon={IoClose}
            className="absolute right-2 top-0 rounded-lg text-text-alternative"
            onClick={() => setShowPopover(false)}
          />
        </header>
        {children}
      </div>
    );
};

PopoverContent.Section = PopoverContentSection;
