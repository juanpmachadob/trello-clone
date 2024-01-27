import { updateListTitle } from "@/actions";
import { EditableText } from "@/components/ui";
import { ListMenu } from "@/components/lists";
import type { List } from "@/interfaces";

interface Props {
  list: List;
}

const ListTitle = ({ list }: Props) => {
  /**
   * Updates the list title
   *
   * @param newTitle - The new title of the list
   */
  const handleListTitleEdit = async (newTitle: string) => {
    await updateListTitle(list.boardId, list.id, newTitle);
  };

  return (
    <header className="relative flex items-center justify-between gap-2 px-2 text-sm text-text">
      <EditableText text={list.title} handleEdit={handleListTitleEdit} />
      <ListMenu boardId={list.boardId} listId={list.id} />
    </header>
  );
};

export default ListTitle;
