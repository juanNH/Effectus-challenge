import {useState} from 'react';
import {InitialState} from '../interfaces/user';
import {useSelector, useDispatch} from 'react-redux';
import {
  saveUserInformation,
  userClean,
  userLogin,
} from '../redux/actions/usersActions';
import {RootState} from '../redux/store';
import {userLoginFirebase} from '../firebase/userLoginFirebase';
import {Alert} from 'react-native';
const useLogin = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state: RootState) => {
    return state.userReducers;
  });
  const [login, setLogin] = useState<InitialState>({
    email: '',
    password: '',
  });
  const [eye, setEye] = useState<boolean>(true);
  const changeEyeVisibility = (): void => {
    setEye(!eye);
  };
  const changeEmail = (email: string): void => {
    setLogin({...login, email: email});
  };
  const changePassword = (password: string): void => {
    setLogin({...login, password: password});
  };
  const sendData = async (): Promise<void> => {
    if (login.password && login.email) {
      await dispatch(userLogin(login));
    } else {
      Alert.alert('Alert', 'Please, complete Email and password field', [
        {
          text: 'Ok',
        },
      ]);
    }
  };
  const onAuthStateChanged = async (): Promise<void> => {
    let userData = await userLoginFirebase(userInfo);
    if (userData !== true) {
      setLogin({
        email: '',
        password: '',
      });
      dispatch(
        saveUserInformation({
          email: userData.email,
          loginData: userData.password,
          data: userData.data,
        }),
      );
    } else {
      dispatch(userClean());
      Alert.alert(
        'Error',
        'The password is invalid or the user does not have a password',
        [
          {
            text: 'Ok',
          },
        ],
      );
    }
  };

  return {
    login,
    changeEmail,
    changePassword,
    sendData,
    userInfo,
    onAuthStateChanged,
    changeEyeVisibility,
    eye,
  };
};

export default useLogin;
