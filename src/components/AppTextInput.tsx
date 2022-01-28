import React from 'react';
import {View, TextInput, StyleSheet, Dimensions} from 'react-native';

interface Props {
  placeholder: string;
  value: string;
  onChange: (data: string) => void;
}

const {width: screenWidth} = Dimensions.get('window');

const AppTextInput = ({placeholder, value, onChange}: Props) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        value={value}
        placeholderTextColor="#808080"
        onChangeText={text => onChange(text)}
        underlineColorAndroid="#808080"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: screenWidth * 0.8,
    marginVert: 10,
  },
  textInput: {
    color: '#000000',
    fontSize: 14,
  },
});

export default AppTextInput;
