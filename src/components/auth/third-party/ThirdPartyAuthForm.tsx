"use client";
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io5";
import { authenticateWithThirdParty } from "@/actions/auth";

const ThirdPartyAuthForm = () => {
  /**
   * Handles the login with a third-party provider.
   */
  const handleLogin = async (provider: "google" | "github") => {
    await authenticateWithThirdParty(provider);
  };

  return (
    <div className="my-8 flex w-full flex-col gap-4">
      <p className="text-center text-sm font-semibold text-text-alternative">
        Or continue with:
      </p>
      <button
        onClick={() => handleLogin("google")}
        className="flex h-10 w-full items-center justify-center gap-2 rounded border border-background-alternative bg-white px-2 text-sm font-semibold text-text outline-0 hover:brightness-90 active:brightness-50"
      >
        <FcGoogle size={28} />
        Google
      </button>
      <button
        onClick={() => handleLogin("github")}
        className="flex h-10 w-full items-center justify-center gap-2 rounded border border-background-alternative bg-white px-2 text-sm font-semibold text-text outline-0 hover:brightness-90 active:brightness-50"
      >
        <IoLogoGithub size={28} />
        Github
      </button>
    </div>
  );
};
export default ThirdPartyAuthForm;
