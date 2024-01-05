"use server";
import { revalidatePath } from "next/cache";
import { auth } from "@/auth";
import prisma from "@/lib/prisma";

export const deleteList = async (boardId: string, listId: string) => {
  const session = await auth();

  if (!session?.user?.id) {
    return {
      ok: false,
      data: null,
      error: "You must be logged in to delete a list.",
    };
  }

  return prisma.list
    .delete({
      where: {
        id: listId,
        board: {
          id: boardId,
          userId: session.user.id,
        },
      },
    })
    .then(() => {
      revalidatePath(`/boards/${boardId}`);
    });
};
