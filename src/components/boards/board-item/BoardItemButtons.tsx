"use client";
import { startTransition, useOptimistic } from "react";
import { IoStar, IoStarOutline } from "react-icons/io5";
import { toggleBoardFavorite } from "@/actions";
import type { Board } from "@/interfaces";

interface Props {
  board: Board;
}

export const BoardItemButtons = ({ board }: Props) => {
  const [boardOptimistic, toggleBoardOptimistic] = useOptimistic(
    board,
    (state, newFavoriteValue: boolean) => ({
      ...state,
      isFavorite: newFavoriteValue,
    })
  );

  const handleToggleBoardFavorite = async () => {
    const originalFavoriteStatus = boardOptimistic.isFavorite;
    startTransition(() => toggleBoardOptimistic(!originalFavoriteStatus));

    try {
      await toggleBoardFavorite(boardOptimistic.id, !originalFavoriteStatus);
    } catch (error) {
      startTransition(() => toggleBoardOptimistic(originalFavoriteStatus));
    }
  };

  return (
    <button className="absolute bottom-0 right-0 m-3 text-white duration-150 hover:scale-110">
      {boardOptimistic.isFavorite && (
        <IoStar
          size={16}
          className="text-[#e2b203]"
          onClick={handleToggleBoardFavorite}
        />
      )}
      {!boardOptimistic.isFavorite && (
        <IoStarOutline size={16} onClick={handleToggleBoardFavorite} />
      )}
    </button>
  );
};
