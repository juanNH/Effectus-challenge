import {useState} from 'react';
import {cleanMovies} from '../redux/actions/moviesActions';
import {useDispatch} from 'react-redux';

export const useSearch = () => {
  const dispatch = useDispatch();

  const [searchBarValue, setSearchBarValue] = useState<string>('');

  const cleanSearchBarValue = () => {
    setSearchBarValue('');
    dispatch(cleanMovies());
  };
  const changeSearchBarValue = (text: string): void => {
    setSearchBarValue(text);
  };

  return {
    searchBarValue,
    cleanSearchBarValue,
    changeSearchBarValue,
  };
};
