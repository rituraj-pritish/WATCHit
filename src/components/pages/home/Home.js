import React from 'react';
import ImageSlider from '../../image-slider/ImageSlider';
import { Link } from 'react-router-dom';

import { StyledLink } from '../../../index.styles';
import { connect } from 'react-redux';

import Carousel from '../../carousel/Carousel';
import { GradientButton, HomeContainer, ButtonsContainer } from './HomeStyles';
import { Divider } from '../../../index.styles';

const Home = ({ movies: { nowPlaying, discover },tv }) => {
  return (
    <div>
      <ImageSlider data={nowPlaying.results} slideTime={3000} link />
      <HomeContainer>
        <ButtonsContainer>
          <GradientButton to='/discover/movies'>Movies</GradientButton>
          <GradientButton to='/discover/tv-shows'>TV Shows</GradientButton>
        </ButtonsContainer>
        <Divider />
        <Carousel
          mediaType='movie'
          data={discover.topRated}
          carouselTitle='Top Rated Movies'
        />
        <Divider />
        <Carousel
          mediaType='tv'
          data={tv.discover.topRated}
          carouselTitle='Top Rated Series'
        />
        <Divider />
      </HomeContainer>
    </div>
  );
};

const mapStateToProps = state => ({
  movies: state.movies,
  tv: state.tv
});

export default connect(mapStateToProps)(Home);
