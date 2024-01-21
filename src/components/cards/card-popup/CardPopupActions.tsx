import { IoShareSocialOutline, IoTrashOutline } from "react-icons/io5";
import { deleteCard } from "@/actions";
import { Button } from "@/components/ui";
import type { CardWithList } from "@/interfaces";

interface Props {
  cardWithList: CardWithList;
}

const CardPopupActions = ({ cardWithList }: Props) => {
  return (
    <aside className="col-span-3 flex flex-col gap-2">
      <p className="text-xs font-semibold text-text-alternative">Actions</p>
      <ul className="flex flex-col gap-2">
        <li>
          <Button
            size="sm"
            variant="secondary"
            className="w-full !justify-start"
            onClick={() =>
              deleteCard(
                cardWithList.list.boardId,
                cardWithList.listId,
                cardWithList.id
              )
            }
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
