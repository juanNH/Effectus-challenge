import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Dimensions} from 'react-native';

interface Props {
  text: string;
  sendData: () => void;
}

const {width: screenWidth} = Dimensions.get('window');

const AppButton = ({text, sendData}: Props) => {
  return (
    <TouchableOpacity onPress={sendData} style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    marginVertical: 50,
    backgroundColor: '#000000',
    width: screenWidth * 0.44,
    borderRadius: 50,
    alignItems: 'center',
  },
  text: {
    color: '#ffffff',
    fontSize: 16,
    padding: 10,
  },
});

export default AppButton;
