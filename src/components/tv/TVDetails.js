import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ReactPlayer from 'react-player';

import { getShow } from '../../actions/tvActions';

import Loader from '../loader/Loader';
import {
  Icon,
  Overview,
  DetailsOverviewContainer,
  Rating,
  Poster,
  MovieDetailsContainer,
  BackdropContainer
} from './TVDetails.styles';

import Carousel from '../carousel/Carousel';
import Backdrop from '../backdrop/Backdrop';


const TVDetails = ({match,getShow,tv}) => {
  
  useEffect(() => {
    getShow(match.params.tv_id);
  }, []);

  if (!tv.current || tv.loading) return <Loader />;
  console.log(tv.current);

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
  } = tv.current;
  console.log(tv);
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
  )
}

const mapStateToProps = state => ({
  tv: state.tv
});

export default connect(
  mapStateToProps,
  { getShow }
)(TVDetails);
