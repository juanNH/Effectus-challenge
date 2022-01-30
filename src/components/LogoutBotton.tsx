import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {cleanMovies} from '../redux/actions/moviesActions';
import {userLogout} from '../redux/actions/usersActions';
interface Props {
  text: string;
  cleanSearchBarValue: () => void;
}

const LogoutBotton = ({text, cleanSearchBarValue}: Props) => {
  const handlepress = () => {
    cleanSearchBarValue();
    dispatch(cleanMovies());
    dispatch(userLogout());
    navigation.navigate('LoginScreen');
  };
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <View style={styles.logOutContainer}>
      <TouchableOpacity style={styles.logOutBotton} onPress={handlepress}>
        <Text style={styles.logOutText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  logOutContainer: {
    alignItems: 'flex-end',
  },
  logOutBotton: {
    marginRight: 8,
  },
  logOutText: {
    color: '#000000',
    opacity: 0.8,
    fontSize: 16,
  },
});
export default LogoutBotton;
