import { IGameList } from '../types';

const API_KEY = '2565b73cb1f84944a53974c646e776fa';

async function getGameList(): Promise<IGameList> {
  const response = await fetch(
    `https://api.rawg.io/api/games?key=${API_KEY}&metacritic=80,100&dates=2020-01-01,2023-01-01`
  );

  if (response.status === 200) {
    const data = response.json();
    return data;
  }

  throw new Error(`${response.status}`);
}

export default getGameList;
