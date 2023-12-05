import { IoStarOutline, IoTimeOutline } from "react-icons/io5";
import { BoardsSection } from "@/components/boards";
import { Navbar } from "@/components/ui";

const temporalBoards = [
  {
    id: "1",
    title: "Board 1",
  },
  {
    id: "2",
    title: "Board 2",
  },
  {
    id: "3",
    title: "Board 3",
  },
  {
    id: "4",
    title: "Board 4",
  },
];

export default function BoardsPage() {
  return (
    <main className="flex min-h-screen flex-auto flex-col items-center bg-white">
      <Navbar className="bg-white" isDarkContent={true} />
      <div className="my-10 flex w-full max-w-4xl flex-col gap-12">
        <BoardsSection
          Icon={IoStarOutline}
          title="Starred boards"
          boards={temporalBoards}
        />
        {/* <BoardsSection
          Icon={IoTimeOutline}
          title="Recently viewed"
          boards={temporalBoards}
        /> */}
      </div>
    </main>
  );
}
