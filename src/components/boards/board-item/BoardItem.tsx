import Link from "next/link";
import { IoStarOutline } from "react-icons/io5";

interface Props {
  id: string;
  title: string;
}

export const BoardItem = ({ id, title }: Props) => {
  return (
    <li className="relative">
      <Link
        href={`/boards/${id}`}
        className="block h-24 rounded bg-gradient-to-br from-[#0C66E4] to-[#37B4C3] p-2 hover:brightness-75"
      >
        <span className="font-bold text-white">{title}</span>
      </Link>
      <button className="absolute bottom-0 right-0 m-3 text-white duration-150 hover:scale-110">
        <IoStarOutline size={16} />
        {/* <IoStar size={16} className="text-[#e2b203]" /> */}
      </button>
    </li>
  );
};
