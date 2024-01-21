"use client";
import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getCardById } from "@/actions";
import CardPopupHeader from "./CardPopupHeader";
import CardPopupBody from "./CardPopupBody";
import CardPopupActions from "./CardPopupActions";
import type { CardWithList } from "@/interfaces";

const CardPopup = () => {
  const searchParams = useSearchParams();
  const [cardWithList, setCardWithList] = useState<CardWithList>();

  /**
   * Fetches the selected card from the URL query params
   */
  const getSelectedCard = useCallback(async () => {
    const cardId = searchParams.get("card");
    if (!cardId) return;

    const { ok, data: cardWithList } = await getCardById(cardId);
    if (!ok || !cardWithList) return;

    setCardWithList(cardWithList);
  }, [searchParams]);

  /**
   * Hook to fetch the selected card
   */
  useEffect(() => {
    getSelectedCard();
  }, [searchParams, getSelectedCard]);

  if (!searchParams.has("card") || !cardWithList) return null;
  return (
    <div className="absolute inset-0 z-10 flex items-start justify-center bg-black/70">
      <section className="relative my-12 min-h-96 w-1/2 rounded-xl bg-background p-4">
        <CardPopupHeader cardWithList={cardWithList} />

        <div className="grid grid-cols-12">
          <CardPopupBody />
          <CardPopupActions />
        </div>
      </section>
    </div>
  );
};
export default CardPopup;
