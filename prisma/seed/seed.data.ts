import type { SeedBoard, SeedCard, SeedList, SeedUser } from "./seed.interface";
import bcryptjs from "bcryptjs";

export const seedUser: SeedUser = {
  id: "dummy-user-1",
  name: "Trello",
  email: "trello@test.com",
  password: bcryptjs.hashSync("123456"),
};

export const seedBoards: SeedBoard[] = [
  {
    id: "dummy-board-1",
    title: "My first board",
    isFavorite: true,
    listsOrder: ["dummy-list-1", "dummy-list-2", "dummy-list-3"],
    userId: seedUser.id,
  },
  {
    id: "dummy-board-2",
    title: "My second board",
    isFavorite: false,
    listsOrder: [],
    userId: seedUser.id,
  },
];

export const seedLists: SeedList[] = [
  {
    id: "dummy-list-1",
    title: "To Do",
    cardsOrder: ["dummy-card-1", "dummy-card-2", "dummy-card-3"],
    boardId: seedBoards[0].id,
  },
  {
    id: "dummy-list-2",
    title: "In progress",
    cardsOrder: ["dummy-card-4"],
    boardId: seedBoards[0].id,
  },
  {
    id: "dummy-list-3",
    title: "Done",
    cardsOrder: [],
    boardId: seedBoards[0].id,
  },
];

export const seedCards: SeedCard[] = [
  {
    id: "dummy-card-1",
    title: "loreum ipsum dolor",
    description: "Blandit erat sed dolor ea et no illum aliquyam at.",
    listId: seedLists[0].id,
  },
  {
    id: "dummy-card-2",
    title: "sit amet consectetur adipiscing elit",
    description: "Amet sit labore sit. Aliquyam diam dolor at magna accusam.",
    listId: seedLists[0].id,
  },
  {
    id: "dummy-card-3",
    title: "sed do eiusmod tempor incididunt",
    description: "Zzril elit dignissim sed et consetetur clita ea diam.",
    listId: seedLists[0].id,
  },
  {
    id: "dummy-card-4",
    title: "ut labore et dolore magna aliqua",
    description: "Aliquyam duo eirmod ea praesent est dolor rebum nulla vero.",
    listId: seedLists[1].id,
  },
];
