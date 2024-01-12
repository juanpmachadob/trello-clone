import { Card } from "./card.interface";

export interface List {
  id: string;
  title: string;

  createdAt: Date;
  updatedAt: Date;

  cardsOrder?: string[];
  cards?: Card[];
  boardId: string;
}
