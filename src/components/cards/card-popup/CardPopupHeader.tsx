"use client";
import { LuAppWindow, LuX } from "react-icons/lu";
import { ButtonIcon, EditableText } from "@/components/ui";

const CardPopupHeader = () => {
  const handleClosePopup = () => {};

  return (
    <header className="mb-8 flex flex-row justify-between">
      <div className="w-full">
        <span className="flex items-center gap-2 text-xl text-text-alternative">
          <LuAppWindow size={24} />
          <EditableText text={"title"} />
        </span>
        <p className="ml-10 text-xs text-text-alternative">
          in list <u>my list</u>
        </p>
      </div>
      <ButtonIcon
        Icon={LuX}
        iconSize={24}
        className="rounded-full"
        onClick={handleClosePopup}
      />
    </header>
  );
};
export default CardPopupHeader;
