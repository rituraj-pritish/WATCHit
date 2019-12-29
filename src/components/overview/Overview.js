import React, { useState } from 'react';
import { connect } from 'react-redux';

import {
  OverviewContainer,
  Rating,
  Icon,
  OverviewDetails,
  Poster,
  Title,
  Favourite,
  Read
} from './OverviewStyles';
import { setAlert, toggleFavourite } from '../../actions/userActions';

const Overview = ({
  favourite,
  poster_path,
  overview,
  vote_average,
  title,
  genres,
  runtime,
  media_type,
  media_id,
  media,
  auth,
  user: { user },
  setAlert,
  toggleFavourite
}) => {
  const [showFullOverview, setShowFullOverview] = useState(false);
  let genre;
  if (genre) {
    genre = genres.map((genre, idx) => {
      if (idx === genres.length - 1) return genre.name;
      return ' ' + genre.name + ' ' + '|' + ' ';
    });
  }

  const addToFavourites = () => {
    if (!auth.isAuth) {
      setAlert('Login to continue', 'error');
      return;
    }
    toggleFavourite(user.id, { media_type, media_id, favorite: true }, media);
  };

  const removeFromFavourites = () => {
    toggleFavourite(user.id, { media_type, media_id, favorite: false });
  };

  return (
    <OverviewContainer>
      <Title>{title}</Title>
      {(media_type === 'movie' || media_type === 'tv') && (
        <div>
          {favourite ? (
            <Favourite
              onClick={removeFromFavourites}
              className='fas fa-star'
              data-tip='Remove from Favourites'
              data-place='left'
              color='#d4af37'
            />
          ) : (
            <Favourite
              onClick={addToFavourites}
              className='fas fa-star'
              data-tip='Add to Favourites'
              data-place='left'
            />
          )}
        </div>
      )}
      <Poster
        style={{
          background: `url(${`https://image.tmdb.org/t/p/original${poster_path}`}) center top / cover no-repeat`
        }}
      />
      <OverviewDetails>
        <div>
          {showFullOverview ? (
            <div>
              {overview}{' '}
              <Read onClick={() => setShowFullOverview(false)}>Read Less</Read>
            </div>
          ) : (
            <div>
              {overview
                .split('')
                .filter((l, i) => i < 500)
                .join('')}{' '}
              {overview.length > 500 && (
                <span>
                  {'...'}{' '}
                  <Read onClick={() => setShowFullOverview(true)}>
                    {' '}
                    Read More
                  </Read>
                </span>
              )}
            </div>
          )}
        </div>
        {vote_average && (
          <span>
            <Icon size='3' margin='0 10px' className='far fa-star' />
            <Rating>
              <h2>{vote_average}</h2> /10
            </Rating>
          </span>
        )}
        <div style={{ margin: '10px 0' }}>{genres && genre}</div>
        {runtime && (
          <div>
            <i className='far fa-clock' />
            {'  '}
            {runtime} min
          </div>
        )}
      </OverviewDetails>
    </OverviewContainer>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
  user: state.user
});

export default connect(
  mapStateToProps,
  { setAlert, toggleFavourite }
)(Overview);
