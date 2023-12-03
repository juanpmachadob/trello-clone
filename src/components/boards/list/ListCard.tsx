import { IoBrushOutline } from "react-icons/io5";

interface Props {
  text?: string;
}

export const ListCard = ({ text }: Props) => {
  return (
    <span className="group relative flex w-full cursor-pointer items-center justify-between rounded-lg bg-white p-2 text-sm text-text shadow outline-2 hover:outline hover:outline-primary">
      {text}
      <button className="invisible absolute right-1 rounded-full p-2 hover:bg-background group-hover:visible">
        <IoBrushOutline />
      </button>
    </span>
  );
};
