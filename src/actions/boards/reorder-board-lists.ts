"use server";
import { revalidatePath } from "next/cache";
import { auth } from "@/auth";
import prisma from "@/lib/prisma";

export const reorderBoardLists = async (
  boardId: string,
  orderedListsIds: string[]
) => {
  const session = await auth();

  if (!session?.user?.id) {
    return {
      ok: false,
      data: null,
      error: "You must be logged in to re-order a list.",
    };
  }

  return prisma.board
    .update({
      where: {
        id: boardId,
        userId: session.user.id,
      },
      data: { listsOrder: orderedListsIds },
    })
    .then(() => {
      revalidatePath(`/boards/${boardId}`);
    });
};
