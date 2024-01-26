import { deleteList, updateListTitle } from "@/actions";
import { EditableText } from "@/components/ui";
import { ListMenu } from "@/components/lists";
import type { List } from "@/interfaces";

interface Props {
  list: List;
}

const ListTitle = ({ list }: Props) => {
  const handleListTitleEdit = async (newTitle: string) => {
    const title = newTitle.trim();
    if (title === list.title) return;

    await updateListTitle(list.boardId, list.id, title);
  };

  const handleListDelete = async () => {
    await deleteList(list.boardId, list.id);
  };

  return (
    <header className="relative flex items-center justify-between gap-2 text-sm text-text">
      <EditableText text={list.title} handleEdit={handleListTitleEdit} />
      <ListMenu handleDelete={handleListDelete} />
    </header>
  );
};

export default ListTitle;
