"use server";
import prisma from "@/lib/prisma";

export const getBoardById = async (id: string) =>
  prisma.board
    .findFirst({
      where: { id },
      include: {
        lists: {
          include: {
            cards: {},
          },
        },
      },
    })
    .then((data) => ({
      status: 200,
      data,
    }))
    .catch((error) => {
      console.error(error);
      return {
        status: 500,
        data: null,
        error: "Internal server error",
      };
    });
