import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

//redux
import {Store} from './src/redux/store';
import {Provider} from 'react-redux';

//controller
import NavigationController from './src/navigation/NavigationController';

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={Store}>
        <NavigationController />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
