import {InitialState} from '../../interfaces/user';
import {LOGIN, LOGOUT, SAVEINFORMATION, CLEAN} from '../actions/usersActions';

interface Action {
  type: string;
  payload: InitialState;
  data: {};
}

export const initialState: InitialState = {
  email: '',
  password: '',
};

const usersReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case LOGIN:
      return action.payload;
    case LOGOUT:
      return initialState;
    case SAVEINFORMATION:
      return action.payload;
    case CLEAN:
      return initialState;
    default:
      return state;
  }
};
export default usersReducer;
