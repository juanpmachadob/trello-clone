"use client";
import { IoStar, IoStarOutline } from "react-icons/io5";
import { toggleBoardFavorite } from "@/actions";
import type { Board } from "@/interfaces";

interface Props {
  board: Board;
}

export const BoardItemButtons = ({ board }: Props) => {
  const handleToggleBoardFavorite = () => {
    toggleBoardFavorite(board.id, !board.isFavorite);
  };

  return (
    <button className="absolute bottom-0 right-0 m-3 text-white duration-150 hover:scale-110">
      {board.isFavorite && (
        <IoStar
          size={16}
          className="text-[#e2b203]"
          onClick={handleToggleBoardFavorite}
        />
      )}
      {!board.isFavorite && (
        <IoStarOutline size={16} onClick={handleToggleBoardFavorite} />
      )}
    </button>
  );
};
