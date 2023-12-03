import { IoEllipsisHorizontalSharp } from "react-icons/io5";

export const ListTitle = () => {
  return (
    <header className="relative flex items-center justify-between px-2 py-1 text-sm font-semibold text-text">
      My card
      <button className="absolute right-1 rounded-lg p-2 text-text-alternative hover:bg-background-alternative">
        <IoEllipsisHorizontalSharp />
      </button>
    </header>
  );
};
