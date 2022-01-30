import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import {IMDBResponse} from '../interfaces/IMDbInterface';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/movieList';
//import {debounce} from '../helpers/debounce';
//import {useMovies} from './../hooks/useMovies';
const {width: screenWidth} = Dimensions.get('window');

const MoviesScreen = () => {
  //const {movies} = useMovies();
  const [searchBarValue, setSearchBarValue] = useState<string>('');
  const [moviesList, setMoviesList] = useState<IMDBResponse>({
    d: [],
    q: '',
    v: 0,
  });
  const getMovies = async (source: any) => {
    try {
      const config = {
        headers: {
          'X-RapidAPI-Host': 'imdb8.p.rapidapi.com',
          'X-RapidAPI-Key':
            '16ab26ce60mshc0a51f737040285p1a65ffjsnda518e7a8c23',
        },
        params: {q: searchBarValue},
        cancelToken: source.token,
      };
      const IMDbResponsePromise = axios.get(
        'https://imdb8.p.rapidapi.com/auto-complete',
        config,
      );
      console.log('promesa');

      const IMDbResponse = await Promise.all([IMDbResponsePromise]);
      console.log('promesa exitosa');
      setMoviesList({
        d: IMDbResponse[0].data.d,
        q: IMDbResponse[0].data.q,
        v: IMDbResponse[0].data.v,
      });
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log('Peticion atrapada');
      } else {
        throw error;
      }
    }
  };
  const cleanSearchBarValue = () => {
    setSearchBarValue('');
  };
  const changeSearchBarValue = (text: string): void => {
    setSearchBarValue(text);
  };
  useEffect(() => {
    let source = axios.CancelToken.source();
    let timeoutId = setTimeout(() => {
      console.log('ejecuciongetmovies');
      getMovies(source);
    }, 5000);

    return () => {
      source.cancel();
      clearTimeout(timeoutId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchBarValue]);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.logOutContainer}>
          <TouchableOpacity
            style={styles.logOutBotton}
            onPress={() => console.log('asd')}>
            <Text style={styles.logOutText}>logout</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Welcome!</Text>
        <SearchBar
          changeSearchBarValue={changeSearchBarValue}
          searchBarValue={searchBarValue}
          cleanSearchBarValue={cleanSearchBarValue}
        />
        <MovieList moviesList={moviesList} />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  logOutContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginTop: 5,
  },
  textInputContainer: {
    marginVertical: 5,
  },
  title: {
    fontSize: 40,
    color: '#000000',
    textAlign: 'center',
    marginVertical: 3,
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
  textInputSearch: {
    borderRadius: 20,
    color: '#808080',
    width: screenWidth * 0.9,
    alignSelf: 'center',
    backgroundColor: '#c5c2c2',
  },
});

export default MoviesScreen;
