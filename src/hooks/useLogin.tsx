import {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/core';

interface LoginData {
  email: string;
  password: string;
}

const useLogin = () => {
  const navigation = useNavigation();

  const [asd, setAsd] = useState(false);

  const [login, setLogin] = useState<LoginData>({
    email: '',
    password: '',
  });

  const changeEmail = (email: string): void => {
    setLogin({...login, email: email});
  };
  const changePassword = (password: string): void => {
    setLogin({...login, password: password});
  };

  const sendData = () => {
    console.log(login);
    setAsd(true);
  };
  useEffect(() => {
    if (asd) {
      navigation.navigate('MoviesScreen');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [asd]);

  return {login, changeEmail, changePassword, sendData};
};

export default useLogin;
