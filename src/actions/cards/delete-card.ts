"use server";
import { revalidatePath } from "next/cache";
import { auth } from "@/auth";
import prisma from "@/lib/prisma";

export const deleteCard = async (
  boardId: string,
  listId: string,
  cardId: string
) => {
  const session = await auth();

  const userId = session?.user?.id as string;
  if (!userId) {
    return {
      ok: false,
      error: "You must be logged in to delete a card.",
    };
  }

  return prisma
    .$transaction(async (tx) => {
      // First, delete the card and select the list's cardsOrder
      const deletedCard = await tx.card.delete({
        where: {
          id: cardId,
        },
        select: {
          list: {
            select: {
              cardsOrder: true,
            },
          },
        },
      });

      // Filter out the deleted card from the list's cardsOrder
      const newCardsOrder = deletedCard.list.cardsOrder.filter(
        (id) => id !== cardId
      );

      // Then, update the list to remove the deleted card from the cardsOrder array
      await tx.list.update({
        where: { id: listId },
        data: {
          cardsOrder: newCardsOrder,
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
