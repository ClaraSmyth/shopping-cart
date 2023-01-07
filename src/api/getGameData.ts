import { IGame } from '../types';

// API Provided for free by RAWG - https://rawg.io/apidocs

const API_KEY = '2565b73cb1f84944a53974c646e776fa';

async function getGameData(slug: string): Promise<IGame> {
  const cachedRequests = JSON.parse(sessionStorage.getItem('gameDataCache') || '{}');
  if (cachedRequests[slug]) return cachedRequests[slug];

  const response = await fetch(`https://api.rawg.io/api/games/${slug}?key=${API_KEY}`);

  if (response.status === 200) {
    const data = await response.json();
    cachedRequests[slug] = data;
    sessionStorage.setItem('gameDataCache', JSON.stringify(cachedRequests));

    return data;
  }

  throw new Error(`${response.status}`);
}

export default getGameData;
