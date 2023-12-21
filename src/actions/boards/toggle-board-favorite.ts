"use server";
import { revalidatePath } from "next/cache";
import { auth } from "@/auth";
import prisma from "@/lib/prisma";

export const toggleBoardFavorite = async (id: string, isFavorite: boolean) => {
  const session = await auth();

  if (!session?.user?.id) {
    return {
      ok: false,
      data: null,
      error: "You must be logged in to create a board.",
    };
  }

  return prisma.board
    .update({
      where: { id, userId: session.user.id },
      data: { isFavorite },
    })
    .then(() => {
      revalidatePath("/boards");
    });
};
