"use client";

interface Props {
  remaining: number;
  handleAdd: () => void;
}

export const BoardAdd = ({ remaining, handleAdd }: Props) => {
  return (
    <li className="relative">
      <div
        className="flex h-24 cursor-pointer flex-col items-center justify-center rounded bg-background p-2 hover:brightness-75"
        onClick={() => handleAdd()}
      >
        <span className="text-sm">Create new board</span>
        <small>{remaining} remaining</small>
      </div>
    </li>
  );
};
