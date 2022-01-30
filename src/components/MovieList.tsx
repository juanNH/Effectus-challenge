import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {IMDBResponse} from '../interfaces/IMDbInterface';
import MovieCard from './MovieCard';

interface Props {
  moviesList: IMDBResponse;
  searchBarValueLength: number;
}

const MovieList = ({moviesList, searchBarValueLength}: Props) => {
  return (
    <View style={{paddingBottom: 320}}>
      {moviesList.d && moviesList.d.length > 0 ? (
        <FlatList
          data={moviesList.d}
          horizontal={false}
          renderItem={({item}: any) => <MovieCard movie={item} />}
          showsVerticalScrollIndicator={false}
        />
      ) : searchBarValueLength !== 0 && moviesList.d === undefined ? (
        <View style={styles.textContainer}>
          <Text style={styles.text}>No movies, look for some </Text>
        </View>
      ) : (
        <View style={styles.textContainer}>
          <Text style={styles.text}>Please, insert a movie title</Text>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    color: '#000000',
    fontSize: 16,
  },
  textContainer: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default MovieList;
