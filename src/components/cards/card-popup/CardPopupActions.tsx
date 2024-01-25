import { toast } from "react-toastify";
import { IoShareSocialOutline, IoTrashOutline } from "react-icons/io5";
import { deleteCard } from "@/actions";
import { Button } from "@/components/ui";
import type { CardWithList } from "@/interfaces";

interface Props {
  cardWithList: CardWithList;
}

const CardPopupActions = ({ cardWithList }: Props) => {
  /**
   * Deletes the card from the list
   */
  const handleDeleteCard = async () => {
    const { ok } = await deleteCard(
      cardWithList.list.boardId,
      cardWithList.listId,
      cardWithList.id
    );
    if (ok) toast.success("Card deleted successfully");
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
            onClick={handleDeleteCard}
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
