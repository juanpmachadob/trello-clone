"use server";
import { revalidatePath } from "next/cache";
import { auth } from "@/auth";
import prisma from "@/lib/prisma";

export const reorderListCards = async (
  boardId: string,
  listId: string,
  orderedCardsIds: string[]
) => {
  const session = await auth();

  if (!session?.user?.id) {
    return {
      ok: false,
      data: null,
      error: "You must be logged in to re-order a card.",
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
      data: { cardsOrder: orderedCardsIds },
    })
    .then(() => {
      revalidatePath(`/boards/${boardId}`);
    });
};
