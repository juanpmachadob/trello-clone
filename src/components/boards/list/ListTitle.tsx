import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import { ButtonIcon, EditableText } from "@/components/ui";

interface Props {
  title: string;
  placeholder?: string;
  handleEdit?: (newText: string) => void;
}
export const ListTitle = ({ title, placeholder, handleEdit }: Props) => {
  return (
    <header className="relative flex items-center justify-between gap-2 text-sm font-semibold text-text">
      <EditableText
        text={title}
        placeholder={placeholder}
        handleEdit={handleEdit}
      />
      <ButtonIcon
        Icon={IoEllipsisHorizontalSharp}
        className="rounded-lg p-2 text-text-alternative"
      />
    </header>
  );
};
