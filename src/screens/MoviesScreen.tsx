import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text, View, Dimensions} from 'react-native';
import axios from 'axios';
//components
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';
import LogoutBotton from '../components/LogoutBotton';
// redux
import {useSelector, useDispatch} from 'react-redux';
import {setMovies} from './../redux/actions/moviesActions';
import {RootState} from '../redux/store';
import {GET_IMDb_movies} from '../api/IMDb';
//hooks
import {useSearch} from './../hooks/useSearch';
import {useUserInformation} from '../hooks/useUserInformation';
//import {debounce} from '../helpers/debounce';
//import {useMovies} from './../hooks/useMovies';
const {width: screenWidth} = Dimensions.get('window');

const MoviesScreen = () => {
  const {searchBarValue, cleanSearchBarValue, changeSearchBarValue} =
    useSearch();
  const {userInfo} = useUserInformation();
  const moviesListRedux = useSelector((state: RootState) => {
    return state.moviesReducers;
  });
  const dispatch = useDispatch();
  //const {movies} = useMovies();
  const moviesList = moviesListRedux;
  const getMovies = async (source: any) => {
    try {
      const IMDbResponse = await Promise.all([
        GET_IMDb_movies(searchBarValue, source),
      ]);
      dispatch(
        setMovies({
          d: IMDbResponse[0].data.d,
          q: IMDbResponse[0].data.q,
          v: IMDbResponse[0].data.v,
        }),
      );
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log('Peticion atrapada');
      } else {
        throw error;
      }
    }
  };

  useEffect(() => {
    let source = axios.CancelToken.source();
    let timeoutId = setTimeout(() => {
      if (searchBarValue !== '') {
        getMovies(source);
      }
    }, 1000);

    return () => {
      source.cancel();

      clearTimeout(timeoutId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchBarValue]);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <LogoutBotton text="Logout" cleanSearchBarValue={cleanSearchBarValue} />
        <Text style={styles.title}>Welcome!</Text>
        <Text style={styles.subTitle}>{userInfo.email}</Text>
        <SearchBar
          changeSearchBarValue={changeSearchBarValue}
          searchBarValue={searchBarValue}
          cleanSearchBarValue={cleanSearchBarValue}
        />
        <MovieList
          moviesList={moviesList}
          searchBarValueLength={searchBarValue.length}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
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
    marginTop: -5,
  },
  subTitle: {
    fontSize: 20,
    color: '#000000',
    textAlign: 'center',
    marginVertical: 3,
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
