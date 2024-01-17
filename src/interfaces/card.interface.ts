import { List } from "@/interfaces";

export interface Card {
  id: string;
  title: string;
  description: string;

  createdAt: Date;
  updatedAt: Date;

  listId: string;
}

export interface CardWithList extends Card {
  list: Omit<List, "cards">;
}
