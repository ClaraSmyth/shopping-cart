import { IGameList } from '../types';

// API Provided for free by RAWG - https://rawg.io/apidocs

const API_KEY = '2565b73cb1f84944a53974c646e776fa';

async function getGameList(search: string, page: number): Promise<IGameList> {
  const date = new Date().toISOString().slice(0, 10);
  const defaultParams = `&metacritic=80,100&dates=2020-01-01,${date}&page=${page}&page_size=24`;
  const searchParams = `&ordering=metacritic=0,100&search=${search.trim()}&page=${page}&page_size=24`;
  const params = search ? searchParams : defaultParams;

  const cachedRequests = JSON.parse(sessionStorage.getItem('gameListCache') || '{}');
  if (cachedRequests[params]) return cachedRequests[params];

  const response = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}${params}`);

  if (response.status === 200) {
    const data = await response.json();
    cachedRequests[params] = data;
    sessionStorage.setItem('gameListCache', JSON.stringify(cachedRequests));
    return data;
  }

  throw new Error(`${response.status}`);
}

export default getGameList;
