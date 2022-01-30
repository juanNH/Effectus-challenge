import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {IMDBResponse} from '../interfaces/IMDbInterface';
import MovieCard from './MovieCard';

interface Props {
  moviesList: IMDBResponse;
}

const MovieList = ({moviesList}: Props) => {
  return (
    <View>
      {moviesList.d && moviesList.d.length > 0 ? (
        <FlatList
          data={moviesList.d}
          horizontal={false}
          renderItem={({item}: any) => <MovieCard movie={item} />}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <Text>no hay peliculas </Text>
      )}
    </View>
  );
};

export default MovieList;
