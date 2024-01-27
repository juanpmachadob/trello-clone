"use client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { IoBrushOutline } from "react-icons/io5";
import { deleteCard } from "@/actions";
import { Popover, ButtonIcon } from "@/components/ui";

interface Props {
  boardId: string;
  listId: string;
  cardId: string;
}

const CardMenu = ({ boardId, listId, cardId }: Props) => {
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

  return (
    <Popover>
      <Popover.Opener>
        <ButtonIcon
          Icon={IoBrushOutline}
          iconSize={12}
          className="rounded-full"
        />
      </Popover.Opener>

      <Popover.Content title="Card actions" className="left-0 top-8">
        <Popover.Content.Section title="Options">
          <Popover.Content.Section.Item onClick={handleCardDelete}>
            Delete this card
          </Popover.Content.Section.Item>
        </Popover.Content.Section>
      </Popover.Content>
    </Popover>
  );
};

export default CardMenu;
