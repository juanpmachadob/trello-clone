import { createContext, useState } from "react";

export type PopoverContextType = {
  showPopover: boolean;
  setShowPopover: (show: boolean) => void;
  onBlurPopover: (e: React.FocusEvent) => void;
};
const PopoverContext = createContext<PopoverContextType | null>(null);

interface Props {
  children: React.ReactNode;
}
const PopoverProvider = ({ children }: Props) => {
  const [showPopover, setShowPopover] = useState(false);

  /**
   * Closes the popover when clicking outside
   */
  const onBlurPopover = (e: React.FocusEvent) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
      setShowPopover(false);
    }
  };

  return (
    <PopoverContext.Provider
      value={{ showPopover, setShowPopover, onBlurPopover }}
    >
      {children}
    </PopoverContext.Provider>
  );
};

export { PopoverContext, PopoverProvider };
