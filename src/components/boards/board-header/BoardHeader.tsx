import { BoardTitle, ToggleFavorite } from "@/components/boards";
import type { Board } from "@/interfaces";

interface Props {
  board: Board;
}

export const BoardHeader = ({ board }: Props) => {
  return (
    <header className="flex h-14 w-full items-center gap-2 bg-black/25 px-4">
      <BoardTitle board={board} />
      <ToggleFavorite
        className="rounded-sm p-2.5 text-white hover:bg-white/10"
        board={board}
      />
    </header>
  );
};
