"use server";
import { revalidatePath } from "next/cache";
import { auth } from "@/auth";
import prisma from "@/lib/prisma";

export const updateBoardTitle = async (id: string, title: string) => {
  const session = await auth();

  if (!session?.user?.id) {
    return {
      ok: false,
      data: null,
      error: "You must be logged in to update a board.",
    };
  }

  return prisma.board
    .update({
      where: { id, userId: session.user.id },
      data: { title },
    })
    .then(() => {
      revalidatePath(`/boards/${id}`);
    });
};
