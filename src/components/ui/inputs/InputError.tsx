import { FieldError } from "react-hook-form";

interface Props {
  error?: FieldError;
}

const InputError = ({ error }: Props) => {
  if (error)
    return (
      <span role="alert" className="text-xs text-danger">
        {error.message}
      </span>
    );
};

export default InputError;
