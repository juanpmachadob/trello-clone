import { List } from "./list.interface";

export interface Board {
  id: string;
  title: string;
  isFavorite: boolean;

  createdAt: Date;
  updatedAt: Date;

  listsOrder?: string[];
  lists?: List[];
}
