import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
//reducers
import moviesReducers from './reducers/moviesReducers';
import userReducers from './reducers/usersReducers';

const rootReducer = combineReducers({moviesReducers, userReducers});

export const Store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>;
