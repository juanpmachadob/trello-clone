"use server";
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
        console.error(err);
        throw err;
      }

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
        console.error(err);
        throw err;
      }

      return {
        ok: false,
      };
    });
