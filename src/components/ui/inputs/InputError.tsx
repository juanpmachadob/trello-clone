import { FieldError } from "react-hook-form";

interface Props {
  error?: FieldError;
}

export const InputError = ({ error }: Props) => {
  if (error)
    return (
      <span role="alert" className="text-xs text-danger">
        {error.message}
      </span>
    );
};
