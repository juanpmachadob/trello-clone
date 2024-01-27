"use server";
import { isRedirectError } from "next/dist/client/components/redirect";
import bcryptjs from "bcryptjs";
import prisma from "@/lib/prisma";
import { loginWithCredentials } from "./login";

export const registerWithCredentials = async (
  name: string,
  email: string,
  password: string
) =>
  prisma.user
    .create({
      data: { name, email, password: bcryptjs.hashSync(password) },
    })
    .then(() => loginWithCredentials(email, password))
    .catch((err) => {
      // Fix for redirect errors
      if (isRedirectError(err)) {
        throw err;
      }

      let errorMsg = "An error occurred. Please try again.";
      if (err.code === "P2002") {
        errorMsg = "This email address is already in use.";
      }

      return {
        ok: false,
        error: errorMsg,
      };
    });
