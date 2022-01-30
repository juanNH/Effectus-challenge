import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface Props {
  text: string;
  cleanSearchBarValue: () => void;
}

const LogoutBotton = ({text, cleanSearchBarValue}: Props) => {
  return (
    <View style={styles.logOutContainer}>
      <TouchableOpacity
        style={styles.logOutBotton}
        onPress={() => {
          cleanSearchBarValue();
          console.log('asd');
        }}>
        <Text style={styles.logOutText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  logOutContainer: {
    flex: 1,
  },
  logOutBotton: {
    top: 0,
    position: 'absolute',
    right: 0,
    marginRight: 10,
  },
  logOutText: {
    color: '#000000',
    opacity: 0.8,
    fontSize: 16,
  },
});
export default LogoutBotton;
