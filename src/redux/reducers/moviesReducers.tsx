import {IMDBResponse} from '../../interfaces/IMDbInterface';
import {InitialState} from '../../interfaces/movies';
import {SET_MOVIES, CLEAN_MOVIES} from '../actions/moviesActions';

interface Action {
  type: string;
  payload: IMDBResponse;
}

export const initialState: InitialState = {
  d: [],
  q: '',
  v: 0,
};

const moviesReducers = (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_MOVIES:
      return {
        d: action.payload.d,
        q: action.payload.q,
        v: action.payload.v,
      };
    case CLEAN_MOVIES:
      return initialState;
    default:
      return state;
  }
};
export default moviesReducers;
