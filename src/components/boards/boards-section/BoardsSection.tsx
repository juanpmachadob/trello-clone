import { IconType } from "react-icons";
import { BoardItem } from "@/components/boards";
import type { Board } from "@/interfaces";

interface Props {
  Icon?: IconType;
  title: string;
  boards: Board[];
  children?: React.ReactNode;
}

const BoardsSection = ({ Icon, title, boards, children }: Props) => {
  return (
    <div className="m-4">
      <header className="m-2 flex items-center gap-4 font-bold">
        {Icon && <Icon size={20} />}
        <h3>{title}</h3>
      </header>
      <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
        {boards.map((board) => (
          <BoardItem key={board.id} board={board} />
        ))}
        {children}
      </ul>
    </div>
  );
};

export default BoardsSection;
