"use client";
import { toast } from "react-toastify";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import { deleteList } from "@/actions";
import { Popover, ButtonIcon } from "@/components/ui";

interface Props {
  boardId: string;
  listId: string;
}

const ListMenu = ({ boardId, listId }: Props) => {
  /**
   * Deletes the list from the board
   */
  const handleListDelete = async () => {
    const { ok } = await deleteList(boardId, listId);
    if (ok) toast.success("List deleted successfully");
  };

  return (
    <Popover>
      <Popover.Opener>
        <ButtonIcon
          Icon={IoEllipsisHorizontalSharp}
          className="rounded-lg p-2 text-text-alternative"
        />
      </Popover.Opener>

      <Popover.Content title="List actions" className="left-0 top-8">
        <Popover.Content.Section title="Options">
          <Popover.Content.Section.Item onClick={handleListDelete}>
            Delete this list
          </Popover.Content.Section.Item>
        </Popover.Content.Section>
      </Popover.Content>
    </Popover>
  );
};

export default ListMenu;
