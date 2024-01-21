"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { LuAppWindow, LuX } from "react-icons/lu";
import { ButtonIcon, EditableText } from "@/components/ui";

const CardPopupHeader = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  /**
   * Removes the card ID from the URL query params to close the card popup
   */
  const handleClosePopup = () => {
    const params = new URLSearchParams(searchParams);
    params.delete("card");

    router.push(`${pathname}?${params.toString()}`);
  };

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
