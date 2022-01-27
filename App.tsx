import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

//controller
import NavigationController from './src/navigation/NavigationController';

const App = () => {
  return (
    <NavigationContainer>
      <NavigationController />
    </NavigationContainer>
  );
};

export default App;
