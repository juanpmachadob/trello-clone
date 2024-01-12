"use server";
import { revalidatePath } from "next/cache";
import { auth } from "@/auth";
import prisma from "@/lib/prisma";

export const createList = async (boardId: string, title: string) => {
  const session = await auth();

  const userId = session?.user?.id as string;
  if (!userId) {
    return {
      ok: false,
      error: "You must be logged in to create a list.",
    };
  }

  return prisma
    .$transaction(async (tx) => {
      // First, create the list
      const listData = await tx.list.create({
        data: {
          title,
          boardId,
        },
      });

      // Then, update the board to include the new list in the listsOrder array
      await tx.board.update({
        where: { id: boardId, userId },
        data: {
          listsOrder: {
            push: listData.id,
          },
        },
      });
    })
    .then(() => ({
      ok: true,
    }))
    .catch((error) => {
      console.error(error);
      return {
        ok: false,
        error: "Internal server error",
      };
    })
    .finally(() => {
      revalidatePath(`/boards/${boardId}`);
    });
};
