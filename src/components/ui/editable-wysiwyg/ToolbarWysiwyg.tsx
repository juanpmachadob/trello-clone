import type { Editor } from "@tiptap/react";
import clsx from "clsx";
import {
  FaArrowRotateLeft,
  FaArrowRotateRight,
  FaBold,
  FaCode,
  FaImage,
  FaItalic,
  FaListOl,
  FaListUl,
  FaStrikethrough,
} from "react-icons/fa6";
import { ButtonIcon } from "@/components/ui";

interface Props {
  editor: Editor | null;
}

const ToolbarWysiwyg = ({ editor }: Props) => {
  if (!editor) return null;

  const handleAttachImage = () => {
    const url = window.prompt("URL");

    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  return (
    <header className="flex justify-between p-2 shadow">
      <div className="flex gap-2 divide-x-2">
        <span className="flex">
          <ButtonIcon
            Icon={FaBold}
            className={clsx("size-6 rounded", {
              "bg-blue-50 !text-primary hover:bg-blue-50":
                editor.isActive("bold"),
            })}
            title="Bold"
            onClick={() => editor.chain().focus().toggleBold().run()}
          />
          <ButtonIcon
            Icon={FaItalic}
            className={clsx("size-6 rounded", {
              "bg-blue-50 !text-primary hover:bg-blue-50":
                editor.isActive("italic"),
            })}
            title="Italic"
            onClick={() => editor.chain().focus().toggleItalic().run()}
          />
          <ButtonIcon
            Icon={FaStrikethrough}
            className={clsx("size-6 rounded", {
              "bg-blue-50 !text-primary hover:bg-blue-50":
                editor.isActive("strike"),
            })}
            title="Strike"
            onClick={() => editor.chain().focus().toggleStrike().run()}
          />
          <ButtonIcon
            Icon={FaCode}
            className={clsx("size-6 rounded", {
              "bg-blue-50 !text-primary hover:bg-blue-50":
                editor.isActive("code"),
            })}
            title="Code"
            onClick={() => editor.chain().focus().toggleCode().run()}
          />
        </span>
        <span className="flex">
          <ButtonIcon
            Icon={FaListUl}
            className={clsx("ml-2 size-6 rounded", {
              "bg-blue-50 !text-primary hover:bg-blue-50":
                editor.isActive("bulletList"),
            })}
            title="Bullet List"
            onClick={() => editor.chain().focus().toggleBulletList().run()}
          />
          <ButtonIcon
            Icon={FaListOl}
            className={clsx("size-6 rounded", {
              "bg-blue-50 !text-primary hover:bg-blue-50":
                editor.isActive("orderedList"),
            })}
            title="Ordered List"
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
          />
        </span>
        <span className="flex">
          <ButtonIcon
            Icon={FaImage}
            className="ml-2 size-6 rounded"
            title="Image"
            onClick={handleAttachImage}
          />
        </span>
      </div>
      <span className="flex">
        <ButtonIcon
          Icon={FaArrowRotateLeft}
          className="ml-2 size-6 rounded"
          title="Undo"
          onClick={() => editor.chain().focus().undo().run()}
        />
        <ButtonIcon
          Icon={FaArrowRotateRight}
          className="size-6 rounded"
          title="Redo"
          onClick={() => editor.chain().focus().redo().run()}
        />
      </span>
    </header>
  );
};
export default ToolbarWysiwyg;
