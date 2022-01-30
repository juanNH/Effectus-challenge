import auth from '@react-native-firebase/auth';
import {InitialState} from '../interfaces/user';

export const userLoginFirebase = async (loginData: InitialState) => {
  try {
    const data = await auth().signInWithEmailAndPassword(
      loginData.email,
      loginData.password,
    );
    return {
      email: loginData.email,
      password: loginData.password,
      data: data.user,
    };
  } catch (err) {
    console.log(err);
    return true;
  }
};
