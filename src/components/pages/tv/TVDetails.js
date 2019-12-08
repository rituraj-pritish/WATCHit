import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ReactPlayer from 'react-player';

import { getShow } from '../../../actions/tvActions';

import Loader from '../../loader/Loader';
import {
  Icon,
  DetailsOverviewContainer,
  Rating,
  Poster,
  MovieDetailsContainer,
  BackdropContainer
} from './TVDetails.styles';

import Overview from '../../overview/Overview';
import Carousel from '../../carousel/Carousel';
import Backdrop from '../../backdrop/Backdrop';

const TVDetails = ({ match, getShow, tv }) => {
  useEffect(() => {
    getShow(match.params.tv_id);
  }, []);

  if (!tv.current || tv.loading) return <Loader />;

  const {
    name,
    backdrop_path,
    poster_path,
    overview,
    tagline,
    runtime,
    vote_count,
    vote_average,
    recommendations,
    videos,
    credits: { cast }
  } = tv.current;
  console.log(tv);
  return (
    <div>
      <BackdropContainer>
        {videos.results.length > 0 ? (
          <ReactPlayer
            width='100%'
            height='100%'
            controls
            url={`https://www.youtube.com/watch?v=${videos.results[videos.results.length - 1].key}`}
          />
        ) : (
          <Backdrop
            backdrop_path={backdrop_path}
            poster_path={poster_path}
            overview={overview}
            vote_average={vote_average}
          />
        )}
      </BackdropContainer>
      <MovieDetailsContainer>
        {videos.results.length > 0 && (
          <Overview
            title={name}
            overview={overview}
            vote_average={vote_average}
            poster_path={poster_path}
          />
        )}

        <Carousel data={cast} mediaType='person' carouselTitle='Cast' />
        <Carousel
          data={recommendations.results}
          mediaType='tv'
          carouselTitle='Recommended'
        />
      </MovieDetailsContainer>
    </div>
  );
};

const mapStateToProps = state => ({
  tv: state.tv
});

export default connect(
  mapStateToProps,
  { getShow }
)(TVDetails);
