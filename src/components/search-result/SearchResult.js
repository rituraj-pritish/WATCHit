import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';

import { removeSearchResults } from '../../actions/moviesActions';
import { Grid, Poster } from './SearchResult.styles';
import { SmallImage } from '../../index.styles';
import Loader from '../loader/Loader';

const SearchResult = ({ match, removeSearchResults, movies }) => {
  useEffect(
    () => () => {
      removeSearchResults();
    },
    []
  );

  if (movies.loading || !movies.search.results) return <Loader />;

  const results = movies.search.results.map(({poster_path,profile_path}) => (
    <Poster
      style={{
        background: `url(${`https://image.tmdb.org/t/p/original${poster_path ? poster_path : profile_path}`}) center top / cover no-repeat `
      }}
    />
  ));
  console.log(results);
  return <Grid>{results.map(item => item)}</Grid>;
};

const mapStateToProps = state => ({
  movies: state.movies
});

export default connect(
  mapStateToProps,
  { removeSearchResults }
)(SearchResult);
