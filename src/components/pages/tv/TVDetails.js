import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ReactPlayer from 'react-player';

import { getShow, removeCurrentTv } from '../../../actions/tvActions';

import Loader from '../../loader/Loader';
import {
  BackdropContainer
} from './TVDetails.styles';
import { Container, Divider } from '../../../index.styles';

import Overview from '../../overview/Overview';
import Carousel from '../../carousel/Carousel';
import Backdrop from '../../backdrop/Backdrop';

const TVDetails = ({ match, getShow, tv, removeCurrentTv, auth, user }) => {
  useEffect(() => {
    getShow(match.params.tv_id);
    window.scrollTo(0, 0);

    return () => {
      removeCurrentTv();
    };
  }, [match.params.tv_id]);

  if (!tv.current || tv.loading) return <Loader />;

  const {
    id,
    name,
    backdrop_path,
    poster_path,
    overview,
    vote_average,
    recommendations,
    videos,
    credits: { cast }
  } = tv.current;

  let favourite;
  if (auth.isAuth) {
    favourite = user.favourite.tv.find(tv => tv.id === id) ? true : false;
  }

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
      <Container>
        {videos.results.length > 0 && (
          <Overview
            title={name}
            overview={overview}
            vote_average={vote_average}
            poster_path={poster_path}
            media_type='tv'
            media_id={id}
            media={tv.current}
            favourite={favourite}
          />
        )}

        <Carousel data={cast} mediaType='person' carouselTitle='Cast' />
        <Divider />
        <Carousel
          data={recommendations.results}
          mediaType='tv'
          carouselTitle='Recommended'
        />
      </Container>
    </div>
  );
};

const mapStateToProps = state => ({
  tv: state.tv,
  auth: state.auth,
  user: state.user
});

export default connect(
  mapStateToProps,
  { getShow, removeCurrentTv }
)(TVDetails);
