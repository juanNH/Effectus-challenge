import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
const {height: screenHeight, width: screenWidth} = Dimensions.get('window');

const MovieCard = ({movie}: any) => {
  return (
    <View style={styles.item}>
      <Image
        style={styles.image}
        source={{
          uri:
            movie.i && movie.i.imageUrl
              ? movie.i.imageUrl
              : 'https://www.emsevilla.es/wp-content/uploads/2020/10/no-image-1.png',
        }}
        resizeMode={movie.i && movie.i.imageUrl ? 'cover' : 'center'}
      />

      <Text style={styles.title}>{movie.l}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    flex: 1,
    backgroundColor: '#ffffff',
    marginVertical: 8,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: screenWidth * 0.8,
    height: screenHeight * 0.6,
    borderColor: '#808080',
    borderWidth: 1,
    borderRadius: 30,
  },
  image: {
    flex: 1,
    width: screenWidth * 0.8,
    height: screenHeight * 0.6,
    borderColor: '#808080',
    borderWidth: 1,
    borderRadius: 30,
  },
  title: {
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold',
    marginHorizontal: 4,
    textAlign: 'center',
  },
});
export default MovieCard;
