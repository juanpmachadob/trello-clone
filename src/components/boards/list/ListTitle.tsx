import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import { updateListTitle } from "@/actions";
import { ButtonIcon, EditableText } from "@/components/ui";
import type { List } from "@/interfaces";

interface Props {
  list: List;
}

export const ListTitle = ({ list }: Props) => {
  const handleCardTitleEdit = async (newTitle: string) => {
    "use server";
    const title = newTitle.trim();
    if (title === list.title) return;

    await updateListTitle(list.boardId, list.id, title);
  };

  return (
    <header className="relative flex items-center justify-between gap-2 text-sm font-semibold text-text">
      <EditableText text={list.title} handleEdit={handleCardTitleEdit} />
      <ButtonIcon
        Icon={IoEllipsisHorizontalSharp}
        className="rounded-lg p-2 text-text-alternative"
      />
    </header>
  );
};
