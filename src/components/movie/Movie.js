import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchMovie, removeCurrentMovie } from '../../actions/moviesActions';

import Loader from '../loader/Loader';
import {
  Icon,
  Overview,
  DetailsOverviewContainer,
  Rating,
  Summary
} from './Movie.styles';
import {
  ImageOverlay,
  OverlayContent,
  SmallImage,
  BackgroundImage
} from '../../index.styles';

const Movie = ({ match, history, fetchMovie, removeCurrentMovie, movies }) => {
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
    vote_average
  } = movies.current;

  const handleBack = () => {
    history.push('/home');
  };

  return (
    <div>
      <ImageOverlay mr='-14px 0 0 0' />
      <OverlayContent>
        <Icon
          size='4'
          className='fas fa-long-arrow-alt-left'
          onClick={handleBack}
        />
        <DetailsOverviewContainer>
          <SmallImage
            style={{
              background: `url(${`https://image.tmdb.org/t/p/original${poster_path}`}) center top / cover no-repeat`
            }}
          />
          <Overview>
            <h3>Summary:</h3>
            {overview}
            <span>
              <Icon
                size='3'
                color='#d4af37'
                margin='0 10px'
                className='far fa-star'
              />
              <Rating>
                <h2>{vote_average}</h2> /10
              </Rating>
            </span>
          </Overview>
        </DetailsOverviewContainer>
      </OverlayContent>

      <BackgroundImage
        style={{
          background: `url(${`https://image.tmdb.org/t/p/original${backdrop_path}`}) center top / cover no-repeat`
        }}
      />

      <Summary>
        <h4>Summary</h4>
        {overview}
        <span>
          <Icon
            size='3'
            color='#d4af37'
            margin='0 10px'
            className='far fa-star'
          />
          <Rating>
            <h2>{vote_average}</h2> /10
          </Rating>
        </span>
      </Summary>
    </div>
  );
};

const mapStateToProps = state => ({
  movies: state.movies
});

export default connect(
  mapStateToProps,
  { fetchMovie, removeCurrentMovie }
)(Movie);
