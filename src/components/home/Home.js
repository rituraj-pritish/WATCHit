import React from 'react';
import ImageSlider from '../image-slider/ImageSlider';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Carousel from '../carousel/Carousel';

const Home = ({ movies: { nowPlaying, current } }) => {
  return (
    <div >
      <ImageSlider movies={nowPlaying} />
    </div>
  );
};

const mapStateToProps = state => ({
  movies: state.movies
});

export default connect(mapStateToProps)(Home);
