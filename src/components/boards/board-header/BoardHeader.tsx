import { BoardMenu, BoardTitle, ToggleFavorite } from "@/components/boards";
import type { Board } from "@/interfaces";

interface Props {
  board: Board;
}

const BoardHeader = ({ board }: Props) => {
  return (
    <header className="flex h-14 w-full items-center justify-between  bg-black/25 px-4">
      <div className="flex gap-2">
        <BoardTitle board={board} />
        <ToggleFavorite
          className="rounded-sm p-2.5 text-white hover:bg-white/10"
          board={board}
        />
      </div>
      <BoardMenu boardId={board.id} />
    </header>
  );
};

export default BoardHeader;
