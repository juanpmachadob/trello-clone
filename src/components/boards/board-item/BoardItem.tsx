import Link from "next/link";
import { IoStar, IoStarOutline } from "react-icons/io5";
import type { Board } from "@/interfaces";

interface Props {
  board: Board;
}

export const BoardItem = ({ board }: Props) => {
  return (
    <li className="relative">
      <Link
        href={`/boards/${board.id}`}
        className="block h-24 rounded bg-gradient-to-br from-[#0C66E4] to-[#37B4C3] p-2 hover:brightness-75"
      >
        <span className="font-bold text-white">{board.title}</span>
      </Link>
      <button className="absolute bottom-0 right-0 m-3 text-white duration-150 hover:scale-110">
        {board.isFavorite && <IoStar size={16} className="text-[#e2b203]" />}
        {!board.isFavorite && <IoStarOutline size={16} />}
      </button>
    </li>
  );
};
