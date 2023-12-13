import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBoardById } from "@/actions";
import { BoardHeader, ListContainer, ListAdd } from "@/components/boards";
import { Navbar } from "@/components/ui";

interface Props {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = params;
  const { data: board } = await getBoardById(id);

  return {
    title: board?.title || "Board",
    description: "Board for all your tasks", // TODO: Add description
  };
}

export default async function BoardPage({ params }: Props) {
  const { id } = params;
  const { data: board } = await getBoardById(id);

  if (!board) notFound();
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0C66E4] to-[#37B4C3]">
      <Navbar className="bg-[#08479e]" />
      <BoardHeader title={board.title} />
      <div className="m-4 grid grid-cols-5 gap-4">
        {board.lists.map((list) => (
          <ListContainer key={list.id} list={list} />
        ))}
        <ListAdd />
      </div>
    </main>
  );
}
