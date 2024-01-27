"use client";
import { MutableRefObject, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { IoAdd, IoClose } from "react-icons/io5";
import { createCard } from "@/actions/cards";
import { Button, ButtonIcon, TextArea } from "@/components/ui";

interface Props {
  boardId: string;
  listId: string;
  listRef: MutableRefObject<HTMLDivElement | null>;
}

const CardAdd = ({ boardId, listId, listRef }: Props) => {
  const titleRef = useRef<HTMLTextAreaElement>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [newCardText, setNewCardText] = useState("");

  const handleStartAdding = () => {
    setIsAdding(true);
    setTimeout(() => titleRef.current?.click(), 0);
  };

  const handleCancelAdding = () => {
    setIsAdding(false);
    setNewCardText("");
  };

  const handleConfirmAdding = async () => {
    handleCancelAdding();
    await createCard(boardId, listId, newCardText);
  };

  return (
    <div className="px-2">
      {listRef.current && isAdding && (
        <div className="flex w-full flex-col gap-2 self-start rounded-xl">
          {createPortal(
            <TextArea
              ref={titleRef}
              autoFocus={true}
              id="title"
              placeholder="Enter a title for this card..."
              value={newCardText}
              onChange={(e) => setNewCardText(e.target.value)}
            />,
            listRef.current
          )}
          <footer className="flex flex-row items-center gap-1">
            <Button size="sm" type="submit" onClick={handleConfirmAdding}>
              Add card
            </Button>
            <ButtonIcon
              Icon={IoClose}
              onClick={handleCancelAdding}
              className="rounded"
            />
          </footer>
        </div>
      )}
      {!isAdding && (
        <button
          onClick={handleStartAdding}
          className="flex h-8 w-full items-center gap-2 rounded-lg px-2 text-sm font-semibold text-text-alternative duration-75 hover:bg-background-alternative"
        >
          <IoAdd size={18} />
          Add a card
        </button>
      )}
    </div>
  );
};
export default CardAdd;
