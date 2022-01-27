import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Screens
import LoginScreen from './../screens/LoginScreen';

const Stack = createNativeStackNavigator();

const NavigationController = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default NavigationController;
