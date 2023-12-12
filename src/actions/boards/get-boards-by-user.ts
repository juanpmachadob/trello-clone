"use server";
import prisma from "@/lib/prisma";

export const getBoardsByUser = async (userId: string) =>
  prisma.board
    .findMany({
      where: { userId },
    })
    .then((data) => ({
      ok: true,
      data,
    }))
    .catch((error) => {
      console.error(error);
      return {
        ok: false,
        data: [],
        error: "Internal server error",
      };
    });
