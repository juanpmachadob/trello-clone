import { IoStar, IoStarOutline } from "react-icons/io5";

export const BoardHeader = () => {
  return (
    <header className="flex h-14 w-full items-center gap-2 bg-black/25 px-4">
      <h1 className="rounded-sm px-2 py-1 text-lg font-extrabold text-white hover:cursor-pointer hover:bg-white/10">
        Board
      </h1>
      <button className="rounded-sm p-2.5 text-white hover:cursor-pointer hover:bg-white/10">
        <IoStarOutline size={16} />
        {/* <IoStar size={16} /> */}
      </button>
    </header>
  );
};
