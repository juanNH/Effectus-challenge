import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const LoginScreen = () => {
  return (
    <View>
      <Text style={styles.titles}>Hola Mundo</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  titles: {
    fontSize: 14,
    color: '#000000',
  },
});

export default LoginScreen;
