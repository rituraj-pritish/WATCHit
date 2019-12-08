import React from 'react';

import {
  OverviewContainer,
  Rating,
  Icon,
  OverviewDetails,
  Poster,
  Title
} from './OverviewStyles';

const Overview = ({
  poster_path,
  overview,
  vote_average,
  title,
  genres,
  runtime
}) => {
  let genre;
  if (genre) {
    genre = genres.map((genre, idx) => {
      if (idx === genres.length - 1) return genre.name;
      return ' ' + genre.name + ' ' + '|' + ' ';
    });
  }

  return (
    <OverviewContainer>
      <Title>{title}</Title>
      <i  className='fas fa-star'/>
      <Poster
        style={{
          background: `url(${`https://image.tmdb.org/t/p/original${poster_path}`}) center top / cover no-repeat`
        }}
      />
      <OverviewDetails>
        <div>{overview}</div>
        {vote_average && (
          <span>
            <Icon size='3' margin='0 10px' className='far fa-star' />
            <Rating>
              <h2>{vote_average}</h2> /10
            </Rating>
          </span>
        )}
        <div style={{ margin: '10px 0' }}>{genres && genre}</div>
        <div>{runtime && `Runtime: ${runtime} min`}</div>
      </OverviewDetails>
    </OverviewContainer>
  );
};

export default Overview;
