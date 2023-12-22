import { ToggleFavorite } from "@/components/boards";
import type { Board } from "@/interfaces";

interface Props {
  board: Board;
}

export const BoardHeader = ({ board }: Props) => {
  return (
    <header className="flex h-14 w-full items-center gap-2 bg-black/25 px-4">
      <h1 className="rounded-sm px-2 py-1 text-lg font-extrabold text-white hover:cursor-pointer hover:bg-white/10">
        {board.title}
      </h1>
      <ToggleFavorite
        className="rounded-sm p-2.5 text-white hover:bg-white/10"
        board={board}
      />
    </header>
  );
};
