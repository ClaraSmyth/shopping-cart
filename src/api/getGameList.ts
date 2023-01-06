import { IGameList } from '../types';

// API Provided for free by RAWG - https://rawg.io/apidocs

const API_KEY = '2565b73cb1f84944a53974c646e776fa';

async function getGameList(search: string): Promise<IGameList> {
  const date = new Date().toISOString().slice(0, 10);
  const defaultParams = `&metacritic=80,100&dates=2020-01-01,${date}`;
  const searchParams = `&ordering=metacritic=0,100&search=${search}`;

  const response = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}${search ? searchParams : defaultParams}`);

  if (response.status === 200) {
    const data = response.json();
    return data;
  }

  throw new Error(`${response.status}`);
}

export default getGameList;
