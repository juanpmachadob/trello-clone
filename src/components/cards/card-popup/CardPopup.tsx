"use client";
import { useSearchParams } from "next/navigation";
import CardPopupHeader from "./CardPopupHeader";
import CardPopupBody from "./CardPopupBody";
import CardPopupActions from "./CardPopupActions";

const CardPopup = () => {
  const searchParams = useSearchParams();

  if (!searchParams.has("card")) return null;
  return (
    <div className="absolute inset-0 z-10 flex items-start justify-center bg-black/70">
      <section className="relative my-12 min-h-96 w-1/2 rounded-xl bg-background p-4">
        <CardPopupHeader />

        <div className="grid grid-cols-12">
          <CardPopupBody />
          <CardPopupActions />
        </div>
      </section>
    </div>
  );
};
export default CardPopup;
