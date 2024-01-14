"use server";
import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const createCard = async (
  boardId: string,
  listId: string,
  title: string
) => {
  const session = await auth();

  const userId = session?.user?.id as string;
  if (!userId) {
    return {
      ok: false,
      error: "You must be logged in to create a card.",
    };
  }

  return prisma
    .$transaction(async (tx) => {
      // First, create the card
      const cardData = await tx.card.create({
        data: {
          title,
          description: "",
          listId,
        },
      });

      // Then, update the list to include the new card in the cardsOrder array
      await tx.list.update({
        where: { id: listId },
        data: {
          cardsOrder: {
            push: cardData.id,
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
