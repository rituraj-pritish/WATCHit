import React from 'react';
import ImageSlider from '../../image-slider/ImageSlider';

import { connect } from 'react-redux';

import Page from '../../ui/Page';
import Carousel from '../../carousel/Carousel';
import { GradientButton, ButtonsContainer } from './HomeStyles';
import { Divider, FullHeightMediaContainer } from '../../../index.styles';

const Home = ({ movies: { nowPlaying, discover }, tv }) => {
  return (
    <div>
      <FullHeightMediaContainer>
        <ImageSlider
          data={nowPlaying.results.slice(0, 5)}
          slideTime={3000}
          link
        />
      </FullHeightMediaContainer>
      <Page>
        <ButtonsContainer>
          <GradientButton to='/discover/movies'>Movies</GradientButton>
          <GradientButton to='/discover/tv-shows'>TV Shows</GradientButton>
        </ButtonsContainer>
        <Divider />
        <Carousel
          mediaType='movie'
          data={discover.topRated.slice(0, 10)}
          carouselTitle='Top Rated Movies'
        />
        <Divider />
        <Carousel
          mediaType='tv'
          data={tv.discover.topRated.slice(0, 10)}
          carouselTitle='Top Rated Series'
        />
        <Divider />
      </Page>
    </div>
  );
};

const mapStateToProps = state => ({
  movies: state.movies,
  tv: state.tv
});

export default connect(mapStateToProps)(Home);
