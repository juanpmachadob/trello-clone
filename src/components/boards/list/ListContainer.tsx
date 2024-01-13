import { CardAdd, CardContainer, ListTitle } from "@/components/boards";
import type { List } from "@/interfaces";

interface Props {
  list: List;
}

const ListContainer = ({ list }: Props) => {
  return (
    <li className="flex flex-col gap-2 self-start rounded-xl border border-white/15 bg-background p-2 shadow">
      <ListTitle list={list} />
      {list.cards &&
        list.cards.map((card) => <CardContainer key={card.id} card={card} />)}
      <CardAdd boardId={list.boardId} listId={list.id} />
    </li>
  );
};

export default ListContainer;
