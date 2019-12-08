import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { discoverTv } from '../../../actions/tvActions';

import Carousel from '../../carousel/Carousel';
import Loader from '../../loader/Loader';
import { TVShowsContainer } from './TVShows.styles';

const TVShows = ({ tv, discoverTv }) => {

  const { airing_today, topRated, popular } = tv.discover;
  if (tv.loading || !airing_today || !topRated || !popular) return <Loader />;

  return (
    <TVShowsContainer>
      <Carousel
        carouselTitle='Airing Today'
        data={airing_today}
        mediaType='tv'
      />
      <Carousel carouselTitle='Trending' data={popular} mediaType='tv' />
      <Carousel carouselTitle='Top Rated' data={topRated} mediaType='tv' />
    </TVShowsContainer>
  );
};

const mapStateToProps = state => ({
  tv: state.tv
});

export default connect(
  mapStateToProps,
  { discoverTv }
)(TVShows);
