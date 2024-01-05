"use server";
import { revalidatePath } from "next/cache";
import { auth } from "@/auth";
import prisma from "@/lib/prisma";

export const deleteBoard = async (id: string) => {
  const session = await auth();

  if (!session?.user?.id) {
    return {
      ok: false,
      data: null,
      error: "You must be logged in to delete a board.",
    };
  }

  return prisma.board
    .delete({
      where: { id, userId: session.user.id },
    })
    .then(() => {
      revalidatePath(`/boards/${id}`);
    });
};
