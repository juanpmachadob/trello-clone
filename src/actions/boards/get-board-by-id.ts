"use server";
import prisma from "@/lib/prisma";

export const getBoardById = async (id: string) => {
  return prisma.board
    .findFirstOrThrow({
      where: { id },
      include: {
        lists: {
          include: {
            cards: {},
          },
        },
      },
    })
    .then((data) => {
      const orderedBoard = {
        ...data,
        lists: data.listsOrder.map((listId) => {
          const listMap = new Map(data.lists.map((list) => [list.id, list]));
          const list = listMap.get(listId)!;

          const cardMap = new Map(list.cards.map((card) => [card.id, card]));
          const cards = list.cardsOrder.map((cardId) => cardMap.get(cardId)!);

          return { ...list, cards };
        }),
      };

      return {
        ok: true,
        data: orderedBoard,
      };
    })
    .catch((error) => {
      console.error(error);
      return {
        ok: false,
        data: null,
        error: "Internal server error",
      };
    });
};
