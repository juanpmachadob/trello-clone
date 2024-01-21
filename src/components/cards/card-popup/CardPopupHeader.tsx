"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { LuAppWindow, LuX } from "react-icons/lu";
import { updateCardTitle } from "@/actions";
import { ButtonIcon, EditableText } from "@/components/ui";
import type { CardWithList } from "@/interfaces";

interface Props {
  cardWithList: CardWithList;
}

const CardPopupHeader = ({ cardWithList }: Props) => {
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

  /**
   * Validates and updates the card title
   *
   * @param newTitle - The new title of the card
   */
  const handleCardTitleEdit = async (newTitle: string) => {
    const title = newTitle.trim();
    if (title === cardWithList.title) return;

    await updateCardTitle(
      cardWithList.list.boardId,
      cardWithList.list.id,
      cardWithList.id,
      newTitle
    );
  };

  return (
    <header className="mb-8 flex flex-row justify-between">
      <div className="w-full">
        <span className="flex items-center gap-2 text-xl text-text-alternative">
          <LuAppWindow size={24} />
          <EditableText
            text={cardWithList.title}
            handleEdit={handleCardTitleEdit}
          />
        </span>
        <p className="ml-10 text-xs text-text-alternative">
          in list <u>{cardWithList.title}</u>
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
