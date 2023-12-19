import { IconType } from "react-icons";
import { MAX_BOARDS_PER_USER } from "@/utils/constants";
import { BoardsSection, BoardAdd } from "@/components/boards";
import type { Board } from "@/interfaces";

interface Props {
  Icon?: IconType;
  title: string;
  boards: Board[];
  handleAdd: () => void;
}

export const BoardsSectionWithBoardAdd = ({
  Icon,
  title,
  boards,
  handleAdd,
}: Props) => {
  const remainingBoards = MAX_BOARDS_PER_USER - boards.length;

  return (
    <BoardsSection Icon={Icon} title={title} boards={boards}>
      <BoardAdd remaining={remainingBoards} handleAdd={handleAdd} />
    </BoardsSection>
  );
};
