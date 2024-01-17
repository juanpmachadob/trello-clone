import { LuText } from "react-icons/lu";

const CardPopupBody = () => {
  return (
    <div className="col-span-9 mb-8">
      <span className="flex items-center gap-4">
        <LuText size={20} className="text-text-alternative" />
        <h2 className="text-lg font-bold text-text-alternative">Description</h2>
      </span>
      <p className="ml-9 text-xs text-text-alternative">
        Lorem ipsum dolor sit amet.
      </p>
    </div>
  );
};
export default CardPopupBody;
