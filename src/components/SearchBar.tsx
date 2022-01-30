import React from 'react';
import {
  StyleSheet,
  TextInput,
  Dimensions,
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  changeSearchBarValue: (text: string) => void;
  searchBarValue: string;
  cleanSearchBarValue: () => void;
}

const {width: screenWidth} = Dimensions.get('window');

const SearchBar = ({
  changeSearchBarValue,
  searchBarValue,
  cleanSearchBarValue,
}: Props) => {
  return (
    <View style={styles.textInputContainer}>
      <View style={styles.textInputSearch}>
        <View style={styles.icons}>
          <Icon name="search-sharp" color="#808080" size={20} />
        </View>
        <View style={{display: 'flex'}}>
          <TextInput
            placeholder={'Search...'}
            value={searchBarValue}
            placeholderTextColor="#808080"
            onChangeText={text => changeSearchBarValue(text)}
            style={styles.textInput}
          />
        </View>
        <TouchableOpacity style={styles.icons} onPress={cleanSearchBarValue}>
          <Icon name="close-sharp" color="#808080" size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  textInputSearch: {
    borderRadius: 20,
    color: '#808080',
    alignSelf: 'center',
    backgroundColor: '#c5c2c2',
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textInput: {
    width: screenWidth * 0.75,
    fontSize: 16,
    marginHorizontal: 8,
    color: '#000000',
  },
  textInputContainer: {
    marginVertical: 5,
  },
  icons: {
    marginHorizontal: 5,
  },
});

export default SearchBar;
