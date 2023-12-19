import { Metadata } from "next";
import { redirect } from "next/navigation";
import { IoStarOutline } from "react-icons/io5";
import { auth } from "@/auth";
import { getBoardsByUser } from "@/actions/boards";
import { BoardsSection } from "@/components/boards";
import { Navbar } from "@/components/ui";
import { Board } from "@/interfaces";

export const metadata: Metadata = {
  title: "Boards",
};

export default async function BoardsPage() {
  const session = await auth();
  const userId = session?.user?.id;
  if (!userId) redirect("/auth/login?redirectTo=/boards");

  const { data } = await getBoardsByUser(userId);
  const boards = data || [];
  const favoriteBoards = boards.filter((board: Board) => board.isFavorite);

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
      </div>
    </main>
  );
}
