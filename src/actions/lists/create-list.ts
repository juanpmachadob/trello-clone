"use server";
import { revalidatePath } from "next/cache";
import { auth } from "@/auth";
import prisma from "@/lib/prisma";

export const createList = async (boardId: string, title: string) => {
  const session = await auth();

  if (!session?.user?.id) {
    return {
      ok: false,
      data: null,
      error: "You must be logged in to create a list.",
    };
  }

  return prisma.list
    .create({
      data: {
        title,
        boardId,
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
    })
    .finally(() => {
      revalidatePath(`/boards/${boardId}`);
    });
};
