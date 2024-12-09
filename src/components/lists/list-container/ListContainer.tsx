"use client";
import { useEffect, useRef, useState } from "react";
import { Reorder } from "framer-motion";
import clsx from "clsx";
import { reorderListCards } from "@/actions";
import { ListTitle } from "@/components/lists";
import { CardAdd, CardContainer } from "@/components/cards";
import type { List } from "@/interfaces";
import "./list-container.css";

interface Props {
  list: List;
  isDraggingCard: boolean;
  setIsDraggingCard: (isDragging: boolean) => void;
}

const ListContainer = ({ list, isDraggingCard, setIsDraggingCard }: Props) => {
  const [cards, setCards] = useState(list.cards || []);
  const listRef = useRef<HTMLDivElement | null>(null);

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
    setIsDraggingCard(false);

    const orderedCardsIds = cards.map((card) => card.id);
    await reorderListCards(list.boardId, list.id, orderedCardsIds);
  };

  return (
    <div className="list-container flex flex-col gap-2 self-start rounded-xl border border-white/15 bg-background py-2 shadow">
      <ListTitle list={list} />
      <Reorder.Group
        // id={list.id}
        ref={listRef}
        axis="y"
        values={cards}
        onReorder={setCards}
        style={{
          margin: "0 0.25rem",
          display: "flex",
          flexDirection: "column",
          overflowY: "auto",
          padding: "0.125rem 0.25rem",
          pointerEvents: isDraggingCard ? "none" : "auto",
          gap: "0.5rem",
        }}
      >
        {cards.map((card) => (
          <Reorder.Item
            key={card.id}
            value={card}
            onDrag={() => setIsDraggingCard(true)}
            onDragEnd={handleReorderCards}
          >
            <CardContainer key={card.id} list={list} card={card} />
          </Reorder.Item>
        ))}
      </Reorder.Group>
      <CardAdd listRef={listRef} boardId={list.boardId} listId={list.id} />
    </div>
  );
};

export default ListContainer;
