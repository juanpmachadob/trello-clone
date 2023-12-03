import { IoAdd } from "react-icons/io5";

export const ListAdd = () => {
  return (
    <li className="flex self-start">
      <button className="flex w-full items-center gap-2 rounded-xl border border-white/15 bg-white/25 p-4 text-sm font-semibold text-white shadow duration-75 hover:border-transparent hover:bg-transparent hover:shadow-none">
        <IoAdd size={18} />
        Add another list
      </button>
    </li>
  );
};
