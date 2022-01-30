import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  placeholder: string;
  value: string;
  typePassword?: boolean;
  onChange: (data: string) => void;
  eye?: boolean;
  changeEyeVisibility?: () => void;
}

const {width: screenWidth} = Dimensions.get('window');

const AppTextInput = ({
  placeholder,
  value,
  onChange,
  typePassword,
  eye,
  changeEyeVisibility,
}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
        <View style={{display: 'flex'}}>
          <TextInput
            style={styles.textInput}
            placeholder={placeholder}
            value={value}
            placeholderTextColor="#808080"
            onChangeText={text => onChange(text)}
            underlineColorAndroid="#808080"
            secureTextEntry={eye}
          />
        </View>
        {typePassword === true && (
          <TouchableOpacity style={styles.icons} onPress={changeEyeVisibility}>
            <Icon
              name={eye ? 'eye-off-outline' : 'eye-outline'}
              color="#808080"
              size={20}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  textInputContainer: {
    alignSelf: 'center',
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textInput: {
    width: screenWidth * 0.8,
    color: '#000000',
    fontSize: 14,
  },
  icons: {
    marginRight: -22.5,
  },
});

export default AppTextInput;
