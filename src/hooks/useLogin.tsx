import {useState} from 'react';
import {InitialState} from '../interfaces/user';
import {useSelector, useDispatch} from 'react-redux';
import {saveUserInformation, userLogin} from '../redux/actions/usersActions';
import {RootState} from '../redux/store';
import {userLoginFirebase} from '../firebase/userLoginFirebase';
import {Alert} from 'react-native';
const useLogin = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state: RootState) => {
    return state.userReducers;
  });
  const [event, setEvent] = useState(false);
  const [login, setLogin] = useState<InitialState>({
    email: '',
    password: '',
  });
  const [eye, setEye] = useState(true);
  const changeEyeVisibility = () => {
    setEye(!eye);
  };

  const changeEmail = (email: string): void => {
    setLogin({...login, email: email});
  };
  const changePassword = (password: string): void => {
    setLogin({...login, password: password});
  };
  const sendData = () => {
    dispatch(userLogin(login));
    setEvent(!event);
  };
  const onAuthStateChanged = async () => {
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
    event,
    changeEyeVisibility,
    eye,
  };
};

export default useLogin;
