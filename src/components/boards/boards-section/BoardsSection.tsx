import { IconType } from "react-icons";
import { BoardItem } from "@/components/boards";

interface Props {
  Icon: IconType;
  title: string;
  boards: Array<{ id: string; title: string }>;
}

export const BoardsSection = ({ Icon, title, boards }: Props) => {
  return (
    <div>
      <header className="m-2 flex items-center gap-4 font-bold">
        <Icon size={20} />
        <h3>{title}</h3>
      </header>
      <ul className="grid grid-cols-4 gap-4">
        {boards.map((board) => (
          <BoardItem key={board.id} id={board.id} title={board.title} />
        ))}
      </ul>
    </div>
  );
};
