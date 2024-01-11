"use client";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { updateBoardTitle } from "@/actions";
import type { Board } from "@/interfaces";

interface Props {
  board: Board;
}

const BoardTitle = ({ board }: Props) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [editing, setEditing] = useState(false);
  const [titleValue, setTitleValue] = useState(board.title);

  /**
   * Hook to update the input width when the title value changes
   */
  useEffect(() => {
    if (editing && inputRef.current && titleRef.current) {
      inputRef.current.style.width = `${titleRef.current.offsetWidth}px`;
    }
  }, [titleValue, editing]);

  const handleEditTitle = async () => {
    setEditing(false);

    const title = titleValue.trim();
    if (title !== board.title.trim()) {
      await updateBoardTitle(board.id, title);
    }
  };

  return (
    <>
      <h1
        ref={titleRef}
        onClick={() => {
          setEditing(true);
          setTimeout(() => inputRef.current?.select(), 0);
        }}
        className={clsx(
          "rounded-sm px-2 py-1 text-lg font-extrabold text-white hover:cursor-pointer hover:bg-white/10",
          { "whitespace-pre absolute invisible": editing }
        )}
      >
        {titleValue}
      </h1>
      <input
        ref={inputRef}
        className={clsx(
          "rounded-sm px-2 py-1 text-lg font-extrabold outline-none hover:cursor-pointer",
          { hidden: !editing }
        )}
        onBlur={handleEditTitle}
        onChange={(e) => setTitleValue(e.target.value)}
        value={titleValue}
      />
    </>
  );
};

export default BoardTitle;
