"use server";
import { revalidatePath } from "next/cache";
import { auth } from "@/auth";
import prisma from "@/lib/prisma";

export const deleteList = async (boardId: string, listId: string) => {
  const session = await auth();

  const userId = session?.user?.id as string;
  if (!userId) {
    return {
      ok: false,
      error: "You must be logged in to delete a list.",
    };
  }

  return prisma
    .$transaction(async (tx) => {
      // First, delete the list and select the board's listsOrder
      const deletedList = await tx.list.delete({
        where: {
          id: listId,
          board: { id: boardId, userId },
        },
        select: {
          board: {
            select: {
              listsOrder: true,
            },
          },
        },
      });

      // Filter out the deleted list from the board's listsOrder
      const newListsOrder = deletedList.board.listsOrder.filter(
        (id) => id !== listId
      );

      // Then, update the board to remove the deleted list from the listsOrder array
      await tx.board.update({
        where: { id: boardId, userId },
        data: {
          listsOrder: newListsOrder,
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
