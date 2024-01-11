"use client";
import { IoEllipsisHorizontalSharp, IoTrash } from "react-icons/io5";
import { ButtonIcon, Popover } from "@/components/ui";

interface Props {
  handleDelete: () => void;
}

export const BoardMenu = ({ handleDelete }: Props) => {
  return (
    <Popover>
      <Popover.Opener>
        <ButtonIcon
          Icon={IoEllipsisHorizontalSharp}
          className="rounded-sm text-white hover:bg-white/10"
        />
      </Popover.Opener>

      <Popover.Content title="Menu" className="right-0 top-8">
        <Popover.Content.Section title="Options">
          <Popover.Content.Section.Item onClick={() => handleDelete()}>
            <div className="flex items-center gap-2">
              <IoTrash size={16} className="text-text-alternative" />
              <span>Delete board</span>
            </div>
          </Popover.Content.Section.Item>
        </Popover.Content.Section>
      </Popover.Content>
    </Popover>
  );
};
