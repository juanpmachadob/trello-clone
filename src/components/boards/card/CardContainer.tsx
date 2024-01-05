import { IoBrushOutline } from "react-icons/io5";
import { ButtonIcon } from "@/components/ui";
import type { Card } from "@/interfaces";

interface Props {
  card: Card;
}

export const CardContainer = ({ card }: Props) => {
  return (
    <span className="group relative flex w-full cursor-pointer items-center justify-between rounded-lg bg-white p-2 text-sm text-text shadow outline-2 hover:outline hover:outline-primary">
      {card.title}
      <ButtonIcon
        Icon={IoBrushOutline}
        iconSize={12}
        className="invisible absolute right-1 rounded-full group-hover:visible"
      />
    </span>
  );
};
