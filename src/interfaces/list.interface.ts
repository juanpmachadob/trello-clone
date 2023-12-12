import { Card } from "./card.interface";

export interface List {
  id: string;
  title: string;

  createdAt: Date;
  updatedAt: Date;

  cards?: Card[];
  boardId: string;
}
