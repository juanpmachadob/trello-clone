"use server";
import { revalidatePath } from "next/cache";
import { auth } from "@/auth";
import prisma from "@/lib/prisma";

export const updateCardTitle = async (
  boardId: string,
  listId: string,
  cardId: string,
  title: string
) => {
  const session = await auth();

  if (!session?.user?.id) {
    return {
      ok: false,
      data: null,
      error: "You must be logged in to update a card.",
    };
  }

  return prisma.card
    .update({
      where: {
        id: cardId,
        list: {
          id: listId,
          board: {
            id: boardId,
            userId: session.user.id,
          },
        },
      },
      data: { title },
    })
    .then(() => {
      revalidatePath(`/boards/${boardId}`);
    });
};
