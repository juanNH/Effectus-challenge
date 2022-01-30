import {initialState} from '../reducers/moviesReducers';

export const SET_MOVIES = 'SET_MOVIES';
export const CLEAN_MOVIES = 'CLEAN_MOVIES';

export const setMovies = (moviesData: any) => (dispatch: any) => {
  console.log(moviesData);
  dispatch({
    type: SET_MOVIES,
    payload: moviesData,
  });
};

export const cleanMovies = () => (dispatch: any) => {
  dispatch({
    type: CLEAN_MOVIES,
    payload: initialState,
  });
};
