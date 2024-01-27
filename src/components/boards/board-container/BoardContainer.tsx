"use client";
import { useEffect, useState } from "react";
import { Reorder } from "framer-motion";
import { ListAdd, ListContainer } from "@/components/lists";
import type { Board } from "@/interfaces";
import clsx from "clsx";
import { reorderBoardLists } from "@/actions";

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
    <div className="m-4">
      <Reorder.Group
        axis="x"
        values={lists}
        onReorder={setLists}
        className={clsx("grid grid-cols-5 gap-4", {
          "!pointer-events-none": isDraggingList,
        })}
      >
        {lists.map((list) => (
          <Reorder.Item
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
