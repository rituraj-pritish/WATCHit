import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ReactPlayer from 'react-player';
import { fetchMovie, removeCurrentMovie } from '../../../actions/moviesActions';

import Page from '../../ui/Page'
import Loader from '../../loader/Loader';
import {
  BackdropContainer
} from './MovieDetails.styles';
import { Divider, FullHeightMediaContainer } from '../../../index.styles';

import Carousel from '../../carousel/Carousel';
import Backdrop from '../../backdrop/Backdrop';
import Overview from '../../overview/Overview';
import Reviews from '../../reviews/Reviews';

const MovieDetails = ({
  match,
  history,
  fetchMovie,
  removeCurrentMovie,
  movies,
  auth,
  user
}) => {
  useEffect(() => {
    fetchMovie(match.params.movie_id);
    window.scrollTo(0, 0);

    return () => {
      removeCurrentMovie();
    };
  }, [match.params.movie_id]);

  if (!movies.current || movies.loading) return <Loader />;

  const {
    id,
    title,
    backdrop_path,
    poster_path,
    overview,
    genres,
    runtime,
    vote_average,
    recommendations,
    videos,
    reviews,
    credits: { cast }
  } = movies.current;

  let favourite;
  if (auth.isAuth) {
    favourite = user.favourite.movie.find(movie => movie.id === id)
      ? true
      : false;
  }

  return (
    <div>
      <FullHeightMediaContainer>
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
      </FullHeightMediaContainer>
      <Page>
        {videos.results.length > 0 && (
          <Overview
            title={title}
            overview={overview}
            vote_average={vote_average}
            poster_path={poster_path}
            genres={genres}
            runtime={runtime}
            media_type='movie'
            media_id={id}
            media={movies.current}
            favourite={favourite}
          />
        )}
        <Carousel data={cast} mediaType='person' carouselTitle='Cast' />
        {recommendations.results.length > 0 && (
          <>
            <Divider />
            <Carousel
              carouselTitle='Recommended'
              data={recommendations.results}
              mediaType='movie'
            />
          </>
        )}
        <Divider />
        <Reviews reviews={reviews} />
      </Page>
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
  movies: state.movies,
  user: state.user
});

export default connect(
  mapStateToProps,
  { fetchMovie, removeCurrentMovie }
)(MovieDetails);
