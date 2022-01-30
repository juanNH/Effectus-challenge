import axios from 'axios';

export const GET_IMDb_movies = (searchBarValue: string, source: any) => {
  const config = {
    headers: {
      'X-RapidAPI-Host': 'imdb8.p.rapidapi.com',
      'X-RapidAPI-Key': '16ab26ce60mshc0a51f737040285p1a65ffjsnda518e7a8c23',
    },
    params: {q: searchBarValue},
    cancelToken: source.token,
  };
  const IMDbResponsePromise = axios.get(
    'https://imdb8.p.rapidapi.com/auto-complete',
    config,
  );
  return IMDbResponsePromise;
};
