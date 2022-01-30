import {useEffect, useState} from 'react';
import axios from 'axios';
//import {IMDb} from '../api/imDB';
import {IMDBResponse} from '../interfaces/IMDbInterface';

export const useMovies = async () => {
  const [moviesList, setMoviesList] = useState<IMDBResponse>({
    d: [],
    q: '',
    v: 0,
  });

  const getMovies = async () => {
    const config = {
      headers: {
        'X-RapidAPI-Host': 'imdb8.p.rapidapi.com',
        'X-RapidAPI-Key': '16ab26ce60mshc0a51f737040285p1a65ffjsnda518e7a8c23',
      },
      params: {q: 'tom'},
    };

    const IMDbResponsePromise = axios.get(
      'https://imdb8.p.rapidapi.com/auto-complete',
      config,
    );

    const IMDbResponse = await Promise.all([IMDbResponsePromise]);
    setMoviesList({
      d: IMDbResponse[0].data.d,
      q: IMDbResponse[0].data.q,
      v: IMDbResponse[0].data.v,
    });
  };
  useEffect(() => {
    getMovies();
  }, []);
  return {
    movies: moviesList,
  };
};
