import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { discoverMovies } from '../../../actions/moviesActions';

import Carousel from '../../carousel/Carousel';
import Loader from '../../loader/Loader';
import { MoviesContainer } from './Movies.styles';

const Movies = ({ movies, discoverMovies }) => {

  const { upcoming, topRated, popular } = movies.discover;
  if (movies.loading || !upcoming || !topRated || !popular) return <Loader />;

  return (
    <MoviesContainer>
      <Carousel carouselTitle='Trending' data={popular} mediaType='movie' />
      <Carousel carouselTitle='Top Rated' data={topRated} mediaType='movie' />
      <Carousel carouselTitle='Upcoming' data={upcoming} mediaType='movie' />
    </MoviesContainer>
  );
};

const mapStateToProps = state => ({
  movies: state.movies
});

export default connect(
  mapStateToProps,
  { discoverMovies }
)(Movies);
