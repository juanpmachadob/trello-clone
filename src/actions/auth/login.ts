"use server";
import { CredentialsSignin } from "next-auth";
import { isRedirectError } from "next/dist/client/components/redirect";
import { signIn } from "@/auth";

/**
 * Logs in the user with a third-party provider.
 */
export const authenticateWithThirdParty = async (
  provider: "google" | "github"
) =>
  signIn(provider, {
    redirectTo: "/boards",
  })
    .then(() => {
      return {
        ok: true,
      };
    })
    .catch((err) => {
      // Fix for redirect errors
      if (isRedirectError(err)) {
        throw err;
      }

      console.log("err :>> ", err);
      return {
        ok: false,
      };
    });

export const loginWithCredentials = async (email: string, password: string) =>
  signIn("credentials", {
    email,
    password,
    redirectTo: "/boards",
  })
    .then(() => {
      return {
        ok: true,
      };
    })
    .catch((err) => {
      // Fix for redirect errors
      if (isRedirectError(err)) {
        throw err;
      }

      console.error(err);

      let errorMsg = "An error occurred. Please try again.";
      if (err instanceof CredentialsSignin) {
        errorMsg = "Incorrect email address and / or password.";
      }
      
      return {
        ok: false,
        error: errorMsg,
      };
    });
