"use client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { IoEllipsisHorizontalSharp, IoTrash } from "react-icons/io5";
import { deleteBoard } from "@/actions";
import { ButtonIcon, Popover } from "@/components/ui";

interface Props {
  boardId: string;
}

const BoardMenu = ({ boardId }: Props) => {
  const { push } = useRouter();

  /**
   * Deletes the board
   */
  const handleBoardDelete = async () => {
    const { ok } = await deleteBoard(boardId);
    if (ok) {
      toast.success("Board deleted successfully");
      push("/boards");
    }
  };

  return (
    <Popover>
      <Popover.Opener>
        <ButtonIcon
          Icon={IoEllipsisHorizontalSharp}
          className="rounded-sm text-white hover:bg-white/10"
        />
      </Popover.Opener>

      <Popover.Content title="Menu" className="right-0 top-8">
        <Popover.Content.Section title="Options">
          <Popover.Content.Section.Item onClick={handleBoardDelete}>
            <div className="flex items-center gap-2">
              <IoTrash size={16} className="text-text-alternative" />
              <span>Delete board</span>
            </div>
          </Popover.Content.Section.Item>
        </Popover.Content.Section>
      </Popover.Content>
    </Popover>
  );
};

export default BoardMenu;
