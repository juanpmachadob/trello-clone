import { PopoverContentSectionItem } from "./PopoverContentSectionItem";

interface Props {
  title: string;
  children?: React.ReactNode;
}

export const PopoverContentSection = ({ title, children }: Props) => {
  return (
    <div>
      <hr className="m-2" />
      <h2 className="mx-4 my-2 text-xs font-bold text-text-alternative">
        {title}
      </h2>
      <ul className="flex cursor-pointer flex-col">{children}</ul>
    </div>
  );
};

PopoverContentSection.Item = PopoverContentSectionItem;
