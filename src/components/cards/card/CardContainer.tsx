"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { CardMenu } from "@/components/cards";
import type { Card, List } from "@/interfaces";

interface Props {
  list: List;
  card: Card;
}
const CardContainer = ({ list, card }: Props) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  /**
   * Sets the card ID in the URL query params to open the card popup
   */
  const handleOpenPopup = () => {
    const params = new URLSearchParams(searchParams);
    params.set("card", card.id);

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <span
      className="group relative flex min-h-9 w-full cursor-pointer items-center justify-between rounded-lg bg-white p-2 text-sm text-text shadow outline-2 hover:outline hover:outline-primary"
      onClick={handleOpenPopup}
    >
      {card.title}
      <span className="invisible absolute right-1 group-hover:visible">
        <CardMenu list={list} card={card} />
      </span>
    </span>
  );
};

export default CardContainer;
