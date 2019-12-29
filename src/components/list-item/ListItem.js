import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { toggleFavourite, toggleWatchlist } from '../../actions/userActions';

import {
  ListItemContainer,
  Details,
  Icon,
  Button,
  Buttons
} from './ListItem.styles';

const ListItem = ({
  title,
  name,
  dataType,
  poster_path,
  vote_average,
  overview,
  release_date,
  id,
  toggleFavourite,
  toggleWatchlist,
  user: { favourite, user }
}) => {
  const mediaType = title ? 'movie' : 'tv';
  let isFavourite;
  if (mediaType === 'movie') {
    isFavourite = favourite.movie.find(media => media.id === id) ? true : false;
  } else {
    isFavourite = favourite.tv.find(media => media.id === id) ? true : false;
  }

  const handleRemove = () => {
    if (dataType === 'watchlist') {
      toggleWatchlist(user.id, {
        media_type: mediaType,
        media_id: id,
        watchlist: false
      });
    } else {
      handleFavourite();
    }
  };

  const handleFavourite = () => {
    toggleFavourite(user.id, {
      media_id: id,
      media_type: mediaType,
      favorite: false
    });
  };

  return (
    <ListItemContainer>
      <Link to={`/${mediaType}/${id}`}>
        <div
          style={{
            background: `url(${`https://image.tmdb.org/t/p/original${poster_path}`}) center center / cover no-repeat`,
            height: '100%',
            minWidth: '150px'
          }}
        />
      </Link>
      <Details>
        <Link to={`/${mediaType}/${id}`}>
          <h3>{title || name}</h3>
        </Link>
        {release_date}
        <p>
          {overview
            .split('')
            .filter((l, i) => i < 270)
            .join('')}
          {overview.length > 270 && '...'}
        </p>

        <Buttons>
          <Button onClick={handleRemove}>
            <Icon className='fas fa-times' />
            Remove
          </Button>
          <Button onClick={handleFavourite}>
            <Icon className='fas fa-star' isFavourite={isFavourite} />
            Favourite
          </Button>
        </Buttons>
      </Details>
    </ListItemContainer>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  { toggleFavourite, toggleWatchlist }
)(ListItem);
