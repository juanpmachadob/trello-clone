"use client";
import { PopoverProvider } from "@/context";
import { PopoverWrapper } from "./PopoverWrapper";
import { PopoverOpener } from "./PopoverOpener";
import { PopoverContent } from "./PopoverContent";

interface Props {
  children: React.ReactNode;
}

const Popover = ({ children }: Props) => {
  return (
    <PopoverProvider>
      <PopoverWrapper>{children}</PopoverWrapper>
    </PopoverProvider>
  );
};

Popover.Opener = PopoverOpener;
Popover.Content = PopoverContent;
export default Popover;
