import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';

export const useUserInformation = () => {
  const userInfo = useSelector((state: RootState) => {
    return state.userReducers;
  });

  return {
    userInfo,
  };
};
