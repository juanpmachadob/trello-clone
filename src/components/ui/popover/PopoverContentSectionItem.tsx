interface Props extends React.HTMLAttributes<HTMLLIElement> {
  children?: React.ReactNode;
}

export const PopoverContentSectionItem = ({ children, ...props }: Props) => {
  return (
    <li className="px-4 py-2 text-start text-sm hover:bg-background" {...props}>
      {children}
    </li>
  );
};
