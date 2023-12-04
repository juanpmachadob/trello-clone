import { Navbar } from "@/components/ui";
import { BoardHeader, List, ListAdd } from "@/components/boards";

export const metadata = {
  title: "Workspace",
  description: "Workspace for all your projects and tasks",
};

export default function BoardPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0C66E4] to-[#37B4C3]">
      <Navbar className="bg-[#08479e]" />
      <BoardHeader />
      <div className="m-4 grid grid-cols-5 gap-4">
        <List />
        <ListAdd />
      </div>
    </main>
  );
}
