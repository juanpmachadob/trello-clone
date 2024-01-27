"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-toastify";
import { IoTrashOutline } from "react-icons/io5";
import { deleteCard } from "@/actions";
import { ButtonIcon } from "@/components/ui";
import type { Card, List } from "@/interfaces";

interface Props {
  list: List;
  card: Card;
}
const CardContainer = ({ list, card }: Props) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { push } = useRouter();

  /**
   * Sets the card ID in the URL query params to open the card popup
   */
  const handleOpenPopup = () => {
    const params = new URLSearchParams(searchParams);
    params.set("card", card.id);

    push(`${pathname}?${params.toString()}`);
  };

  /**
   * Deletes the card from the list
   */
  const handleCardDelete = async () => {
    const { ok } = await deleteCard(list.boardId, list.id, card.id);
    if (ok) toast.success("Card deleted successfully");
  };

  return (
    <span
      className="group relative flex min-h-9 w-full cursor-pointer items-center justify-between rounded-lg bg-white p-2 text-sm text-text shadow outline-2 hover:outline hover:outline-primary"
      onClick={handleOpenPopup}
    >
      {card.title}
      <span className="invisible absolute right-1 group-hover:visible">
        <ButtonIcon
          Icon={IoTrashOutline}
          iconSize={16}
          className="rounded-full"
          onClick={(e) => {
            e.stopPropagation();
            handleCardDelete();
          }}
        />
      </span>
    </span>
  );
};

export default CardContainer;
