"use server";
import prisma from "@/lib/prisma";

export const getCardById = async (id: string) => {
  return prisma.card
    .findFirstOrThrow({
      where: { id },
      include: {
        list: {},
      },
    })
    .then((data) => ({
      ok: true,
      data,
    }))
    .catch((error) => {
      console.error(error);
      return {
        ok: false,
        data: null,
        error: "Internal server error",
      };
    });
};
