import { ListCard } from "./ListCard";
import { ListFooter } from "./ListFooter";
import { ListTitle } from "./ListTitle";

export const List = () => {
  return (
    <li className="flex flex-col gap-2 self-start rounded-xl border border-white/15 bg-background p-2 shadow">
      <ListTitle />
      {[
        "lorem ipsum",
        "dolor sit",
        "consectetur adipiscing elit sed do eiusmod",
      ].map((text) => (
        <ListCard key={text} text={text} />
      ))}
      <ListFooter />
    </li>
  );
};
