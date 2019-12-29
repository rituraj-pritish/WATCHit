import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { discoverTv } from '../../../actions/tvActions';

import Carousel from '../../carousel/Carousel';
import Loader from '../../loader/Loader';
import { Container, Divider } from '../../../index.styles';

const TVShows = ({ tv, discoverTv }) => {
  const { airing_today, topRated, popular } = tv.discover;
  if (tv.loading || !airing_today || !topRated || !popular) return <Loader />;

  return (
    <Container>
      <Carousel
        carouselTitle='Airing Today'
        data={airing_today}
        mediaType='tv'
      />
      <Divider />
      <Carousel carouselTitle='Trending' data={popular} mediaType='tv' />
      <Divider />
      <Carousel carouselTitle='Top Rated' data={topRated} mediaType='tv' />
    </Container>
  );
};

const mapStateToProps = state => ({
  tv: state.tv
});

export default connect(
  mapStateToProps,
  { discoverTv }
)(TVShows);
