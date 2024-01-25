"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import ToolbarWysiwyg from "./ToolbarWysiwyg";
import "./wysiwyg.css";

interface Props {
  content: string;
  setContent: (content: string) => void;
}

const EditableWysiwyg = ({ content, setContent }: Props) => {
  const editor = useEditor({
    extensions: [StarterKit, Image],
    content,
    onUpdate({ editor }) {
      setContent(editor.getHTML());
    },
  });

  return (
    <div className="rounded border border-text bg-white focus-within:border-transparent focus-within:outline focus-within:outline-primary">
      <ToolbarWysiwyg editor={editor} />
      <EditorContent className="text-sm" editor={editor} />
    </div>
  );
};
export default EditableWysiwyg;
