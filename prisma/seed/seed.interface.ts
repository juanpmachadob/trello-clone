export interface SeedUser {
  id: string;
  email: string;
  password: string;
}

export interface SeedBoard {
  id: string;
  title: string;
  isFavorite: boolean;
  userId: SeedUser["id"];
}

export interface SeedList {
  id: string;
  title: string;
  boardId: SeedBoard["id"];
}

export interface SeedCard {
  id: string;
  title: string;
  listId: SeedList["id"];
}
