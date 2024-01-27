"use client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { IoShareSocialOutline, IoTrashOutline } from "react-icons/io5";
import { deleteCard } from "@/actions";
import { Button } from "@/components/ui";

interface Props {
  boardId: string;
  listId: string;
  cardId: string;
}

const CardPopupActions = ({ boardId, listId, cardId }: Props) => {
  const { push } = useRouter();

  /**
   * Deletes the card from the list
   */
  const handleCardDelete = async () => {
    const { ok } = await deleteCard(boardId, listId, cardId);
    if (ok) {
      toast.success("Card deleted successfully");
      push(`/boards/${boardId}`);
    }
  };

  /**
   * Copies the card link to the clipboard
   */
  const handleCopyCardLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Card link copied to clipboard");
  };

  return (
    <aside className="col-span-3 flex flex-col gap-2">
      <p className="text-xs font-semibold text-text-alternative">Actions</p>
      <ul className="flex flex-col gap-2">
        <li>
          <Button
            size="sm"
            variant="secondary"
            className="w-full !justify-start"
            onClick={handleCardDelete}
          >
            <IoTrashOutline size={16} className="text-text-alternative" />
            <span>Delete card</span>
          </Button>
        </li>
        <li>
          <Button
            size="sm"
            variant="secondary"
            className="w-full !justify-start"
            onClick={handleCopyCardLink}
          >
            <IoShareSocialOutline size={16} className="text-text-alternative" />
            <span>Share</span>
          </Button>
        </li>
      </ul>
    </aside>
  );
};
export default CardPopupActions;
