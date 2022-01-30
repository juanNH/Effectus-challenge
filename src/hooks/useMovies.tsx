import axios from 'axios';
import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {InitialState} from '../interfaces/redux';
import {setMovies} from '../redux/actions/moviesActions';

export const useMovies = async (searchBarValue: string) => {
  const dispatch = useDispatch();
  const [moviesState, setMoviesState] = useState<InitialState>({
    d: [],
    q: '',
    v: 0,
  });
  const getMovies = async (source: any) => {
    try {
      const config = {
        headers: {
          'X-RapidAPI-Host': 'imdb8.p.rapidapi.com',
          'X-RapidAPI-Key':
            '16ab26ce60mshc0a51f737040285p1a65ffjsnda518e7a8c23',
        },
        params: {q: searchBarValue},
        cancelToken: source.token,
      };
      const IMDbResponsePromise = axios.get(
        'https://imdb8.p.rapidapi.com/auto-complete',
        config,
      );
      console.log('promesa');

      const IMDbResponse = await Promise.all([IMDbResponsePromise]);
      console.log('promesa exitosa');
      setMoviesState({
        d: IMDbResponse[0].data.d,
        q: IMDbResponse[0].data.q,
        v: IMDbResponse[0].data.v,
      });
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log('Peticion atrapada');
      } else {
        throw error;
      }
    }
  };
  useEffect(() => {
    let source = axios.CancelToken.source();
    let timeoutId = setTimeout(() => {
      if (searchBarValue !== '') {
        console.log('ejecuciongetmovies');
        getMovies(source);
      }
    }, 5000);

    return () => {
      source.cancel();

      clearTimeout(timeoutId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchBarValue]);
  return {moviesState};
};
/* dispatch(
  setMovies({
    d: IMDbResponse[0].data.d,
    q: IMDbResponse[0].data.q,
    v: IMDbResponse[0].data.v,
  }),
); */
