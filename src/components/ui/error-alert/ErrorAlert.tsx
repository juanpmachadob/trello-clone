"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { IoWarning } from "react-icons/io5";

interface Props {
  error?: string;
}

const ErrorAlert = ({ error }: Props) => {
  const searchParams = useSearchParams();
  const [errorMessage, setErrorMessage] = useState(error);

  useEffect(() => {
    if (
      searchParams.has("error") &&
      searchParams.get("error") === "OAuthAccountNotLinked"
    ) {
      setErrorMessage(
        "This account is already registered with another third-party provider. Please sign in with the correct provider."
      );
      return;
    }

    setErrorMessage(error);
  }, [searchParams, error]);

  if (!errorMessage) return null;
  return (
    <div className="flex items-center gap-4 bg-[#fff7d6] p-4 text-sm text-text-alternative">
      <span>
        <IoWarning size={24} className="text-[#e56910]" />
      </span>
      <p>{errorMessage}</p>
    </div>
  );
};
export default ErrorAlert;
