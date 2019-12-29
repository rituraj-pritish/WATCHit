import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { discoverMovies } from '../../../actions/moviesActions';

import Carousel from '../../carousel/Carousel';
import Loader from '../../loader/Loader';
import { Container, Divider } from '../../../index.styles';

const Movies = ({ movies, discoverMovies }) => {
  const { upcoming, topRated, popular } = movies.discover;
  if (movies.loading || !upcoming || !topRated || !popular) return <Loader />;

  return (
    <Container>
      <Carousel carouselTitle='Trending' data={popular} mediaType='movie' />
      <Divider />
      <Carousel carouselTitle='Top Rated' data={topRated} mediaType='movie' />
      <Divider />
      <Carousel carouselTitle='Upcoming' data={upcoming} mediaType='movie' />
    </Container>
  );
};

const mapStateToProps = state => ({
  movies: state.movies
});

export default connect(
  mapStateToProps,
  { discoverMovies }
)(Movies);
