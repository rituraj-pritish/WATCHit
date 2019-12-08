import React from 'react';
import ImageSlider from '../../image-slider/ImageSlider';
import { Link } from 'react-router-dom';

import { StyledLink } from '../../../index.styles';
import { connect } from 'react-redux';

import Carousel from '../../carousel/Carousel';
import { GradientButton, HomeContainer, ButtonsContainer } from './HomeStyles';

const Home = ({ movies: { nowPlaying, current } }) => {
  return (
    <div>
      <ImageSlider data={nowPlaying.results} slideTime={3000} link />
      <HomeContainer>
        <ButtonsContainer>
          <GradientButton to='/discover/movies'>Movies</GradientButton>
          <GradientButton to='/discover/tv-shows'>TV Shows</GradientButton>
        </ButtonsContainer>
      </HomeContainer>
    </div>
  );
};

const mapStateToProps = state => ({
  movies: state.movies
});

export default connect(mapStateToProps)(Home);
