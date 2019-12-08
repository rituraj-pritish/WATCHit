import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ReactPlayer from 'react-player';
import { fetchMovie, removeCurrentMovie } from '../../../actions/moviesActions';

import Loader from '../../loader/Loader';
import {
  Icon,
  DetailsOverviewContainer,
  Rating,
  Poster,
  MovieDetailsContainer,
  BackdropContainer
} from './MovieDetails.styles';

import Carousel from '../../carousel/Carousel';
import Backdrop from '../../backdrop/Backdrop';
import Overview from '../../overview/Overview'

const MovieDetails = ({
  match,
  history,
  fetchMovie,
  removeCurrentMovie,
  movies
}) => {
  useEffect(() => {
    fetchMovie(match.params.movie_id);
  }, []);

  useEffect(
    () => () => {
      removeCurrentMovie();
    },
    []
  );

  if (!movies.current || movies.loading) return <Loader />;
  console.log(movies.current);

  const {
    title,
    backdrop_path,
    poster_path,
    overview,
    tagline,
    genres,
    runtime,
    vote_count,
    vote_average,
    recommendations,
    videos,
    credits: { cast }
  } = movies.current;
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
          <Overview title={title} overview={overview} vote_average={vote_average} poster_path={poster_path} genres={genres} runtime={runtime}  />
        )}

        <Carousel data={cast} mediaType='person' carouselTitle='Cast' />

        <Carousel carouselTitle='Recommended' data={recommendations.results} mediaType='movie' />
      </MovieDetailsContainer>
    </div>
  );
};

const mapStateToProps = state => ({
  movies: state.movies
});

export default connect(
  mapStateToProps,
  { fetchMovie, removeCurrentMovie }
)(MovieDetails);
