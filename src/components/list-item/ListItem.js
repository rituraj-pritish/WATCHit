import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { toggleFavourite, toggleWatchlist } from '../../actions/userActions';

import {
  ListItemContainer,
  Details,
  Icon,
  Button,
  Buttons,
  Poster,
  RemoveIcon,
  Header
} from './ListItem.styles';

const ListItem = ({
  item,
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
  let isFavourite = false;
  if (mediaType === 'movie') {
    if (favourite.movie.length === 0) return;
    isFavourite = favourite.movie.find(media => media.id === id) && true;
  } else {
    if (favourite.tv.length === 0) return;
    isFavourite = favourite.tv.find(media => media.id === id) && true;
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
    toggleFavourite(
      user.id,
      {
        media_id: id,
        media_type: mediaType,
        favorite: isFavourite ? false : true
      },
      item
    );
  };

  return (
    <ListItemContainer>
      <Link to={`/${mediaType}/${id}`}>
        <Poster
          style={{
            background: `url(${`https://image.tmdb.org/t/p/original${poster_path}`}) center center / cover no-repeat`
          }}
        />
      </Link>
      <Details>
        <Header>
          <Link to={`/${mediaType}/${id}`}>
            <h3>{title || name}</h3>
          </Link>
          <RemoveIcon className='fas fa-times' onClick={handleRemove} />
        </Header>
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
            <Icon className='fas fa-star' favourite={isFavourite} />
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
