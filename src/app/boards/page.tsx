import { IoStarOutline, IoTimeOutline } from "react-icons/io5";
import { getBoardsByUser } from "@/actions/boards";
import { BoardsSection } from "@/components/boards";
import { Navbar } from "@/components/ui";
import { Board } from "@/interfaces";

export default async function BoardsPage() {
  const { data: boards } = await getBoardsByUser("dummy-user-1");

  const favoriteBoards: Board[] = [];
  const noFavoriteBoards: Board[] = [];

  boards?.forEach((board) => {
    if (!board.isFavorite) {
      favoriteBoards.push(board);
      return;
    }

    noFavoriteBoards.push(board);
  });

  return (
    <main className="flex min-h-screen flex-auto flex-col items-center bg-white">
      <Navbar className="bg-white" isDarkContent={true} />
      <div className="my-10 flex w-full max-w-4xl flex-col gap-12">
        {favoriteBoards.length > 0 && (
          <BoardsSection
            Icon={IoStarOutline}
            title="Starred boards"
            boards={favoriteBoards}
          />
        )}
        {favoriteBoards.length > 0 && (
          <BoardsSection
            Icon={IoTimeOutline}
            title="Recently viewed"
            boards={noFavoriteBoards}
          />
        )}
      </div>
    </main>
  );
}
