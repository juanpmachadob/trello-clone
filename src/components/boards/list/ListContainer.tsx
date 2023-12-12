import { CardContainer } from "@/components/boards";
import { ListFooter } from "./ListFooter";
import { ListTitle } from "./ListTitle";

export const ListContainer = () => {
  return (
    <li className="flex flex-col gap-2 self-start rounded-xl border border-white/15 bg-background p-2 shadow">
      <ListTitle />
      {[
        "lorem ipsum",
        "dolor sit",
        "consectetur adipiscing elit sed do eiusmod",
      ].map((text) => (
        <CardContainer key={text} text={text} />
      ))}
      <ListFooter />
    </li>
  );
};
