import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Screens
import LoginScreen from './../screens/LoginScreen';
import MoviesScreen from './../screens/MoviesScreen';

const Stack = createNativeStackNavigator();

const NavigationController = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="MoviesScreen" component={MoviesScreen} />
    </Stack.Navigator>
  );
};

export default NavigationController;
