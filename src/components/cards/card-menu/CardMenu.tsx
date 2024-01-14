"use client";
import { IoBrushOutline } from "react-icons/io5";
import { Popover, ButtonIcon } from "@/components/ui";

interface Props {
  handleDelete: () => void;
}

const CardMenu = ({ handleDelete }: Props) => {
  return (
    <Popover>
      <Popover.Opener>
        <ButtonIcon
          Icon={IoBrushOutline}
          iconSize={12}
          className="rounded-full"
        />
      </Popover.Opener>

      <Popover.Content title="Card actions" className="left-0 top-8">
        <Popover.Content.Section title="Options">
          <Popover.Content.Section.Item onClick={() => handleDelete()}>
            Delete this card
          </Popover.Content.Section.Item>
        </Popover.Content.Section>
      </Popover.Content>
    </Popover>
  );
};

export default CardMenu;
