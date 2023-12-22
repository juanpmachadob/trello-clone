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
    userId: seedUser.id,
  },
  {
    id: "dummy-board-2",
    title: "My second board",
    isFavorite: false,
    userId: seedUser.id,
  },
];

export const seedLists: SeedList[] = [
  {
    id: "dummy-list-1",
    title: "To Do",
    boardId: seedBoards[0].id,
  },
  {
    id: "dummy-list-2",
    title: "In progress",
    boardId: seedBoards[0].id,
  },
  {
    id: "dummy-list-3",
    title: "Done",
    boardId: seedBoards[0].id,
  },
];

export const seedCards: SeedCard[] = [
  {
    id: "dummy-card-1",
    title: "loreum ipsum dolor",
    listId: seedLists[0].id,
  },
  {
    id: "dummy-card-2",
    title: "sit amet consectetur adipiscing elit",
    listId: seedLists[0].id,
  },
  {
    id: "dummy-card-3",
    title: "sed do eiusmod tempor incididunt",
    listId: seedLists[0].id,
  },
  {
    id: "dummy-card-4",
    title: "ut labore et dolore magna aliqua",
    listId: seedLists[1].id,
  },
];
