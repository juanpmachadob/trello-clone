"use server";
import { revalidatePath } from "next/cache";
import { auth } from "@/auth";
import prisma from "@/lib/prisma";

export const updateListTitle = async (boardId: string, listId: string, title: string) => {
  const session = await auth();

  if (!session?.user?.id) {
    return {
      ok: false,
      data: null,
      error: "You must be logged in to update a list.",
    };
  }

  return prisma.list
    .update({
      where: {
        id: listId,
        board: {
          id: boardId,
          userId: session.user.id,
        },
      },
      data: { title },
    })
    .then(() => {
      revalidatePath(`/boards/${boardId}`);
    });
};
