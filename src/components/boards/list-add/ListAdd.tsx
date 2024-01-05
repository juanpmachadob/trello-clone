"use client";
import { useParams } from "next/navigation";
import { useRef, useState } from "react";
import { IoAdd, IoClose } from "react-icons/io5";
import { createList } from "@/actions";
import { Button, ButtonIcon, EditableText } from "@/components/ui";

export const ListAdd = () => {
  const params = useParams<{ id: string }>();
  const { id: boardId } = params;

  const [isAdding, setIsAdding] = useState(false);
  const [newListText, setNewListText] = useState("");
  const cardRef = useRef<HTMLDivElement>(null);

  const handleStartAdding = () => {
    setIsAdding(true);
    setTimeout(() => cardRef.current?.querySelector("h2")?.click(), 0);
  };

  const handleCancelAdding = () => {
    setIsAdding(false);
    setNewListText("");
  };

  const handleConfirmAdding = async () => {
    handleCancelAdding();
    await createList(boardId, newListText);
  };

  const onBlur = (e: React.FocusEvent) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
      handleCancelAdding();
    }
  };

  return (
    <li className="flex self-start">
      {isAdding && (
        <div
          ref={cardRef}
          tabIndex={1}
          onBlur={onBlur}
          className="flex w-full flex-col gap-2 self-start rounded-xl border border-white/15 bg-background p-2 shadow"
        >
          <header className="relative flex items-center justify-between gap-2 text-sm font-semibold text-text">
            <EditableText
              text={newListText}
              placeholder="Enter list title..."
              handleEdit={(newText) => setNewListText(newText)}
            />
          </header>
          <footer className="flex flex-row items-center gap-1">
            <Button size="sm" onClick={handleConfirmAdding}>
              Add list
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
          className="flex h-12 w-full items-center gap-2 rounded-xl border border-white/15 bg-white/25 px-4 text-sm font-semibold text-white shadow duration-75 hover:border-transparent hover:bg-transparent hover:shadow-none"
        >
          <IoAdd size={18} />
          Add another list
        </button>
      )}
    </li>
  );
};
