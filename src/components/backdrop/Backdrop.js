import React from 'react';
import { withRouter } from 'react-router-dom';

import {
  BackdropContainer,
  BackdropOverlay,
  
  DetailsOverviewContainer,
  Poster,
  Overview,
  Rating,
  Icon
} from './Backdrop.styles';
import { BackgroundImage,OverlayContent } from '../../index.styles';

const Backdrop = ({ history,overview,vote_average,backdrop_path,poster_path }) => {
  const handleBack = () => {
    history.goBack();
  };
  return (
    <BackdropContainer>
      <BackdropOverlay />
      <OverlayContent>
        <Icon
          size='4'
          color='#fff'
          className='fas fa-long-arrow-alt-left'
          onClick={handleBack}
        />
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
      </OverlayContent>

      <BackgroundImage
        style={{
          background: `url(${`https://image.tmdb.org/t/p/original${backdrop_path}`}) center top / cover no-repeat`
        }}
      />
    </BackdropContainer>
  );
};

export default withRouter(Backdrop);
