import { CardContainer, ListFooter, ListTitle } from "@/components/boards";
import type { List } from "@/interfaces";

interface Props {
  list: List;
}

export const ListContainer = ({ list }: Props) => {
  return (
    <li className="flex flex-col gap-2 self-start rounded-xl border border-white/15 bg-background p-2 shadow">
      <ListTitle title={list.title} />
      {list.cards &&
        list.cards.map((card) => <CardContainer key={card.id} card={card} />)}
      <ListFooter />
    </li>
  );
};
