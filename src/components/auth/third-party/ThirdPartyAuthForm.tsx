"use client";
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io5";
import { authenticateWithThirdParty } from "@/actions/auth";
import { Button } from "@/components/ui";

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
      <Button onClick={() => handleLogin("google")} variant="tertiary">
        <FcGoogle size={28} />
        Google
      </Button>
      <Button onClick={() => handleLogin("github")} variant="tertiary">
        <IoLogoGithub size={28} />
        Github
      </Button>
    </div>
  );
};
export default ThirdPartyAuthForm;
