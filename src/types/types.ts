interface IGame {
  id: number;
  [key: string]: any;
}

interface IGameList {
  count: number;
  next: string | null;
  previous: string | null;
  results: IGame[];
  [key: string]: any;
}

export type { IGame, IGameList };
