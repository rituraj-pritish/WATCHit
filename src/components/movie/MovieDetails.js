import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ReactPlayer from 'react-player';
import { fetchMovie, removeCurrentMovie } from '../../actions/moviesActions';

import Loader from '../loader/Loader';
import {
  Icon,
  Overview,
  DetailsOverviewContainer,
  Rating,
  Poster,
  MovieDetailsContainer,
  BackdropContainer
} from './MovieDetails.styles';

import Carousel from '../carousel/Carousel';
import Backdrop from '../backdrop/Backdrop';

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
    runtime,
    vote_count,
    vote_average,
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
            playing
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
          <DetailsOverviewContainer>
            <Poster
              style={{
                background: `url(${`https://image.tmdb.org/t/p/original${poster_path}`}) center top / cover no-repeat`
              }}
            />
            <Overview>
              <h3>Summary:</h3>
              {overview}
              <span>
                <Icon size='3' margin='0 10px' className='far fa-star' />
                <Rating>
                  <h2>{vote_average}</h2> /10
                </Rating>
              </span>
            </Overview>
          </DetailsOverviewContainer>
        )}

        <Carousel data={cast} mediaType='person' carouselTitle='Cast' />
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
