"use client";
import { useEffect, useState } from "react";
import { Reorder } from "framer-motion";
import clsx from "clsx";
import { reorderListCards } from "@/actions";
import { ListTitle } from "@/components/lists";
import { CardAdd, CardContainer } from "@/components/cards";
import type { List } from "@/interfaces";

interface Props {
  list: List;
}

const ListContainer = ({ list }: Props) => {
  const [cards, setCards] = useState(list.cards || []);
  const [isDragging, setIsDragging] = useState(false);

  /**
   * Update cards when list changes
   */
  useEffect(() => {
    setCards(list.cards || []);
  }, [list]);

  /**
   * Stop dragging and reorder cards
   */
  const handleReorderCards = async () => {
    setIsDragging(false);

    const orderedCardsIds = cards.map((card) => card.id);
    await reorderListCards(list.boardId, list.id, orderedCardsIds);
  };

  return (
    <div className="flex flex-col gap-2 self-start rounded-xl border border-white/15 bg-background p-2 shadow">
      <ListTitle list={list} />
      <Reorder.Group
        axis="y"
        values={cards}
        onReorder={setCards}
        className={clsx("flex flex-col gap-2", {
          "!pointer-events-none": isDragging,
        })}
      >
        {cards.map((card) => (
          <Reorder.Item
            key={card.id}
            value={card}
            onDrag={() => setIsDragging(true)}
            onDragEnd={handleReorderCards}
          >
            <CardContainer key={card.id} list={list} card={card} />
          </Reorder.Item>
        ))}
      </Reorder.Group>
      <CardAdd boardId={list.boardId} listId={list.id} />
    </div>
  );
};

export default ListContainer;
