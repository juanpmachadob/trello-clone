"use server";
import { auth } from "@/auth";
import prisma from "@/lib/prisma";

export const createBoard = async (title: string) => {
  const session = await auth();

  if (!session?.user?.id) {
    return {
      ok: false,
      data: null,
      error: "You must be logged in to create a board.",
    };
  }

  return prisma.board
    .create({
      data: {
        title,
        userId: session.user.id,
      },
    })
    .then((data) => ({
      ok: true,
      data,
    }))
    .catch((error) => {
      console.error(error);
      return {
        ok: false,
        data: null,
        error: "Internal server error",
      };
    });
};
