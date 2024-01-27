"use client";
import { useEffect, useState } from "react";
import { Reorder } from "framer-motion";
import clsx from "clsx";
import { ListAdd, ListContainer } from "@/components/lists";
import type { Board } from "@/interfaces";
import { reorderBoardLists } from "@/actions";
import "./board-container.css";

interface Props {
  board: Board;
}

const BoardContainer = ({ board }: Props) => {
  const [lists, setLists] = useState(board.lists || []);
  const [isDraggingList, setIsDraggingList] = useState(false);
  const [isDraggingCard, setIsDraggingCard] = useState(false);

  /**
   * Update list when board changes
   */
  useEffect(() => {
    setLists(board.lists || []);
  }, [board]);

  /**
   * Stop dragging and reorder lists
   */
  const handleReorderLists = async () => {
    setIsDraggingList(false);

    const orderedListsIds = lists.map((list) => list.id);
    await reorderBoardLists(board.id, orderedListsIds);
  };

  return (
    <div className="board-container relative my-2 flex-auto overflow-y-hidden px-4 py-2">
      <Reorder.Group
        axis="x"
        values={lists}
        onReorder={setLists}
        className={clsx("flex flex-row gap-4", {
          "!pointer-events-none": isDraggingList,
        })}
      >
        {lists.map((list) => (
          <Reorder.Item
            className="min-w-64"
            key={list.id}
            value={list}
            drag={!isDraggingCard}
            onDrag={() => setIsDraggingList(true)}
            onDragEnd={handleReorderLists}
          >
            <ListContainer
              key={list.id}
              list={list}
              isDraggingCard={isDraggingCard}
              setIsDraggingCard={setIsDraggingCard}
            />
          </Reorder.Item>
        ))}
        <ListAdd />
      </Reorder.Group>
    </div>
  );
};
export default BoardContainer;
