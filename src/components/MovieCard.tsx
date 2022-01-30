import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
const {height: screenHeight, width: screenWidth} = Dimensions.get('window');

const MovieCard = ({movie}: any) => {
  return (
    <View style={styles.item}>
      {movie.i && movie.i.imageUrl ? (
        <Image
          style={styles.image}
          source={{
            uri: movie.i.imageUrl,
          }}
          resizeMode="cover"
        />
      ) : (
        <Image
          style={styles.image}
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png',
          }}
          resizeMode="cover"
        />
      )}
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
