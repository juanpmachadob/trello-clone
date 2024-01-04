import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import { EditableText } from "@/components/ui";

interface Props {
  title: string;
  handleEdit?: (newText: string) => void;
}

export const ListTitle = ({ title, handleEdit }: Props) => {
  return (
    <header className="relative flex items-center justify-between gap-2 text-sm font-semibold text-text">
      <EditableText text={title} handleEdit={handleEdit} />
      <button className="rounded-lg p-2 text-text-alternative hover:bg-background-alternative">
        <IoEllipsisHorizontalSharp />
      </button>
    </header>
  );
};
