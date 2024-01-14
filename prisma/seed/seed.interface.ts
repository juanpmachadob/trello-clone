export interface SeedUser {
  id: string;
  name: string;
  email: string;
  password: string;
}

export interface SeedBoard {
  id: string;
  title: string;
  isFavorite: boolean;
  listsOrder: string[];
  userId: SeedUser["id"];
}

export interface SeedList {
  id: string;
  title: string;
  boardId: SeedBoard["id"];
  cardsOrder: string[];
}

export interface SeedCard {
  id: string;
  title: string;
  description?: string;
  listId: SeedList["id"];
}
