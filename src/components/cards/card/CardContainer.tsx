import { deleteCard } from "@/actions";
import { CardMenu } from "@/components/cards";
import type { Card } from "@/interfaces";

interface Props {
  boardId: string;
  card: Card;
}
const CardContainer = ({ boardId, card }: Props) => {
  const handleCardDelete = async () => {
    "use server";
    await deleteCard(boardId, card.listId, card.id);
  };

  return (
    <span className="group relative flex min-h-9 w-full cursor-pointer items-center justify-between rounded-lg bg-white p-2 text-sm text-text shadow outline-2 hover:outline hover:outline-primary">
      {card.title}
      <span className="invisible absolute right-1 group-hover:visible">
        <CardMenu handleDelete={handleCardDelete} />
      </span>
    </span>
  );
};

export default CardContainer;
