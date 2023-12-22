import Link from "next/link";
import { ToggleFavorite } from "@/components/boards";
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
      <ToggleFavorite
        className="absolute bottom-0 right-0 m-3 text-white"
        board={board}
      />
    </li>
  );
};
