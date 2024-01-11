"use client";
import { startTransition, useOptimistic } from "react";
import { IoStar, IoStarOutline } from "react-icons/io5";
import { toggleBoardFavorite } from "@/actions";
import type { Board } from "@/interfaces";

interface Props {
  className?: string;
  board: Board;
}

const ToggleFavorite = ({ className, board }: Props) => {
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
    <button
      className={`group duration-150 ${className}`}
      onClick={handleToggleBoardFavorite}
    >
      {boardOptimistic.isFavorite && (
        <IoStar className="group-hover:scale-125" size={16} />
      )}
      {!boardOptimistic.isFavorite && (
        <IoStarOutline className="group-hover:scale-125" size={16} />
      )}
    </button>
  );
};

export default ToggleFavorite;
