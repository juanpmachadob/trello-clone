"use server";
import { isRedirectError } from "next/dist/client/components/redirect";
import bcryptjs from "bcryptjs";
import prisma from "@/lib/prisma";
import { loginWithCredentials } from "./login";

export const registerWithCredentials = async (
  email: string,
  password: string
) =>
  prisma.user
    .create({
      data: { email, password: bcryptjs.hashSync(password) },
    })
    .then(() => loginWithCredentials(email, password))
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
