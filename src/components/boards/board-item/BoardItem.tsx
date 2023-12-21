import Link from "next/link";
import type { Board } from "@/interfaces";
import { BoardItemButtons } from "./BoardItemButtons";

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
      <BoardItemButtons board={board} />
    </li>
  );
};
