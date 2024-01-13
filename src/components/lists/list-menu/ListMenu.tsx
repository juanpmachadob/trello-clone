"use client";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import { Popover, ButtonIcon } from "@/components/ui";

interface Props {
  handleDelete: () => void;
}

const ListMenu = ({ handleDelete }: Props) => {
  return (
    <Popover>
      <Popover.Opener>
        <ButtonIcon
          Icon={IoEllipsisHorizontalSharp}
          className="rounded-lg p-2 text-text-alternative"
        />
      </Popover.Opener>

      <Popover.Content title="List actions" className="left-0 top-8">
        <Popover.Content.Section title="Options">
          <Popover.Content.Section.Item onClick={() => handleDelete()}>
            Delete this list
          </Popover.Content.Section.Item>
        </Popover.Content.Section>
      </Popover.Content>
    </Popover>
  );
};

export default ListMenu;
