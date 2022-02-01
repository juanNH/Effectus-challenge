import auth from '@react-native-firebase/auth';
import {InitialState} from '../../interfaces/user';
//types
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SAVEINFORMATION = 'SAVEINFORMATION';
export const CLEAN = 'CLEANUSER';
export const userLogin = (loginData: InitialState) => async (dispatch: any) => {
  dispatch({
    type: LOGIN,
    payload: loginData,
  });
};

export const userLogout = () => async (dispatch: any) => {
  try {
    await auth().signOut();
  } catch (err) {
    console.log(err);
  }
  dispatch({
    type: LOGOUT,
    payload: {},
  });
};
export const userClean = () => async (dispatch: any) => {
  dispatch({
    type: CLEAN,
    payload: {},
  });
};

export const saveUserInformation = (userData: {}) => (dispatch: any) => {
  dispatch({
    type: SAVEINFORMATION,
    payload: userData,
  });
};
