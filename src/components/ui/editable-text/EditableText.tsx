"use client";
import clsx from "clsx";
import { useRef, useState } from "react";

interface Props {
  text: string;
  placeholder?: string;
  handleEdit?: (newText: string) => void;
}

const EditableText = ({ text, placeholder, handleEdit }: Props) => {
  const textRef = useRef<HTMLHeadingElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [editing, setEditing] = useState(false);
  const [textValue, setTextValue] = useState(text);

  const onBlur = () => {
    setEditing(false);
    handleEdit && handleEdit(textValue);
  };

  return (
    <div className="flex w-full flex-row items-center text-nowrap">
      <h2
        ref={textRef}
        onClick={() => {
          setEditing(true);
          setTimeout(() => inputRef.current?.select(), 0);
        }}
        className={clsx(
          "w-full cursor-pointer rounded-lg px-2 py-1 font-bold",
          { "whitespace-pre absolute invisible": editing }
        )}
      >
        {textValue || placeholder}
      </h2>
      <input
        ref={inputRef}
        className={clsx(
          "w-full rounded-lg px-2 py-1 font-bold outline outline-2 outline-primary",
          { hidden: !editing }
        )}
        onBlur={onBlur}
        onChange={(e) => setTextValue(e.target.value)}
        value={textValue}
      ></input>
    </div>
  );
};

export default EditableText;
