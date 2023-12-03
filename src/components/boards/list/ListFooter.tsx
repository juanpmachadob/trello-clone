import { IoAdd } from "react-icons/io5";

export const ListFooter = () => {
  return (
    <button className="flex items-center gap-2 rounded-lg p-2 text-sm font-semibold text-text-alternative duration-75 hover:bg-background-alternative">
      <IoAdd size={18} />
      Add a card
    </button>
  );
};
